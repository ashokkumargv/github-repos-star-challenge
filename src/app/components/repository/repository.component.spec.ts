import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RepositoryComponent } from './repository.component';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { TimeAgoPipe } from '../../pipe/time-ago.pipe';
import { Repository } from 'src/app/model/repository.model';
import { GithubRepoDetailsPopupComponent } from '../github-repo-details-popup/github-repo-details-popup.component';
import { of } from 'rxjs';


describe('RepositoryComponent', () => {
  let component: RepositoryComponent;
  let fixture: ComponentFixture<RepositoryComponent>;
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
      "star_rating":1,
    };

    
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RepositoryComponent, 
        TimeAgoPipe,
        GithubRepoDetailsPopupComponent
      ],
      imports: [
        MatDialogModule, 
        MatCardModule,
      ],
      providers: [
      {provide: MatDialogRef , useValue: {}},
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ],
    });
    fixture = TestBed.createComponent(RepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the dialog pop up on repo name click', () => {
    fixture = TestBed.createComponent(RepositoryComponent);
    component = fixture.componentInstance;
    component.repo = mockData;
    fixture.detectChanges();
    component.openDialog();
    expect(component.rating).toBe(mockData.star_rating);
  });

   it('should display rating  on pop up closing ', () => {
    fixture = TestBed.createComponent(RepositoryComponent);
    component = fixture.componentInstance;
    component.repo = mockData;
    spyOn(component.dialog, 'open').and.returnValue({
    afterClosed: () => of(5)} as MatDialogRef<typeof GithubRepoDetailsPopupComponent>);
    component.openDialog();
    fixture.detectChanges();
    expect(component.rating).toBe(5);
   });

});
