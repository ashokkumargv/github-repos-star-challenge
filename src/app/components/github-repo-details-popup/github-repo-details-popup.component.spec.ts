import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { GithubRepoDetailsPopupComponent } from './github-repo-details-popup.component';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarRatingComponent } from 'src/app/components/star-rating/star-rating.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Repository } from 'src/app/model/repository.model';

describe('GithubRepoDetailsPopupComponent', () => {
  let component: GithubRepoDetailsPopupComponent;
  let fixture: ComponentFixture<GithubRepoDetailsPopupComponent>;
  const dialogMock = {
    close: () => { }
  };

 const mockData:Repository = 
 {                   
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
   };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatDialogModule, 
        MatFormFieldModule, 
        MatInputModule,
        MatButtonModule,     
        BrowserAnimationsModule,
        MatCardModule,
        MatIconModule,
        MatTooltipModule        
      ],
      declarations: [GithubRepoDetailsPopupComponent,
        StarRatingComponent
    ],
      providers: [
        {provide: MatDialogRef , useValue: dialogMock},
        {provide: MAT_DIALOG_DATA, useValue: mockData},
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
    });
    fixture = TestBed.createComponent(GithubRepoDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should display component rated star count", () => {
    fixture = TestBed.createComponent(GithubRepoDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const starButtonElements =  fixture.debugElement.nativeElement.querySelectorAll('app-star-rating > button');
    let i =0; 
    starButtonElements.forEach(element => {    
      if(i<2)
      {
        element.click(i+1);    
        fixture.detectChanges();    
        i++;
      }
    }); 
    expect(component.rating).toBe(2);   
  });


  it('should close dialog when ok button clicked', () => {
    fixture = TestBed.createComponent(GithubRepoDetailsPopupComponent);
    component = fixture.componentInstance;  
    let spy = spyOn(component.dialogRef, 'close').and.callThrough();
     fixture.detectChanges();
     component.onSubmit();
     expect(spy).toHaveBeenCalled();  
  });

  it('should display the data', () => {
    fixture = TestBed.createComponent(GithubRepoDetailsPopupComponent);
    component = fixture.componentInstance;  
    fixture.detectChanges();
    expect(component.data.name).toBe(mockData.name);
    expect(component.data.description).toBe(mockData.description);
    expect(component.data.owner).toBe(mockData.owner);
    expect(component.data.stargazers_count).toBe(mockData.stargazers_count);
    expect(component.data.html_url).toBe(mockData.html_url);
    expect(component.data.created_at).toBe(mockData.created_at);
  });
});
