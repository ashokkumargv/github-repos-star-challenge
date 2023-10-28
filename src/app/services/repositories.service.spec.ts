import { TestBed, getTestBed  } from '@angular/core/testing';
import { RepositoriesService } from './repositories.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { throwError  } from 'rxjs';
import { Repository } from '../model/repository.model';


interface Response {
  incomplete_results: boolean;
  items: Repository[];
  total_count: number;
}

describe('Respository Service', () => {
  let injector: TestBed;
  let service: RepositoriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [
        RepositoriesService,
      ]  
    });
    injector = getTestBed();
    service = TestBed.inject(RepositoriesService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  
    it('should return a Response Observable<Respository[]>', () => {
      const mockData:Response = 
      {
        "incomplete_results": true,
        "items": [{            
          "name": "Startup-CTO-Handbook",
          "description": "The Startup CTO's Handbook, a book covering leadership, management and technical topics for leaders of software engineering teams",
          "html_url": "https://github.com/ZachGoldberg/Startup-CTO-Handbook",
          "created_at": new Date("2023-10-13T16:46:57Z"),
          "stargazers_count": 7797,
          "open_issues": 3,	  
          "owner": {
            "login": "ZachGoldberg",
            "avatar_url": "https://avatars.githubusercontent.com/u/148103?v=4",
            "html_url": "https://github.com/ZachGoldberg",       
          },
          "star_rating":0,
        }],
        "total_count": 1             
      };
      
      const lastMonth = new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString().slice(0,10);
      service.getRecentRepos().subscribe(result => {       
        expect(result.length).toBe(1);
        expect(result).toEqual(mockData.items);
      });

      const req = httpMock.expectOne(`${service.API_URL}?q=created:>${lastMonth}&sort=stars&order=desc&page=1`);
      expect(req.request.method).toBe("GET");
      req.flush(mockData);
    });

    it('should throw an error if invalid url', () => {
    spyOn(service,'getRecentRepos').and.returnValue(throwError(() => new Error('invalid url.')))
    service.getRecentRepos()
      .subscribe(next => {}, error => {
        expect(error).toEqual(Error('invalid url.'));
      });    
    });

  });