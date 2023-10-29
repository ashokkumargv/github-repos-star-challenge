import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { Repository } from 'src/app/model/repository.model';
import { RepositoriesService } from './services/repositories.service';
import { of } from 'rxjs';

const mockintialLoadData:Repository[] = 
    [{                   
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
        "star_rating":1,
      }];


describe('AppComponent', () => {
  let service: RepositoriesService;
  
  beforeEach(() => 
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
      providers: [
        RepositoriesService,    
    ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ] 
    })
  );

  

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Most Starred Github Repos'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Most Starred Github Repos');
  });

  it(`should display loading spinner message on initial page load`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.isFirstLoad = true;
    app.loading =true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const initialLoadingText = compiled.querySelector('.initialSpinner')?.textContent;   
    expect(initialLoadingText).toEqual('Load github repos...');
  });

  it(`should display loading spinner message for paging or scrolling`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.isFirstLoad = false;
    app.loading =true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const scrollLoadingText = compiled.querySelector('.scrollSpinner')?.textContent;   
    expect(scrollLoadingText).toEqual('Load more github repos...');
  });

  it(`should display data for initial load`, () => {
    const appComponentFixture = TestBed.createComponent(AppComponent);
    const appComponent = appComponentFixture.componentInstance;
    appComponent.repos=[];    
    let repoService = TestBed.inject(RepositoriesService);
    let getRecentRepoCall = spyOn(repoService,'getRecentRepos').withArgs().and.returnValue(of(mockintialLoadData));//.calls.reset() ;   
    appComponentFixture.detectChanges();  
    expect(getRecentRepoCall).toHaveBeenCalledTimes(1);
  });
  
  it(`should display data for paging or scrolling`, () => {
    const scrollingMockInitialLoadData:Repository[] = 
    [{                   
        "name": "streaming-llm",
        "description": "Efficient Streaming Language Models with Attention Sinks",
        "html_url": "https://github.com/mit-han-lab/streaming-llm",
        "created_at": new Date("2023-09-29T17:45:40Z"),
        "stargazers_count": 5231,
        "open_issues": 17,	  
        "owner": {
          "login": "mit-han-lab",
          "avatar_url": "https://avatars.githubusercontent.com/u/39571499?v=4",
          "html_url": "https://github.com/mit-han-lab",       
        },
        "star_rating":1,
      }];
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;  
    app.repos=[];      
   const respositoryService = TestBed.inject(RepositoriesService);
  
   spyOn(respositoryService,'getRecentRepos')
    .withArgs().and.returnValue(of(mockintialLoadData))
    .withArgs(2).and.returnValue(of(scrollingMockInitialLoadData));
    fixture.detectChanges();     
    app.onScroll();
    fixture.detectChanges();
    let allObject = app.repos.filter((repo) => {      
         return repo;
   });  
    expect(allObject.length).toBe(2);
  });

 
});
