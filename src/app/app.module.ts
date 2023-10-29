import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatDividerModule } from '@angular/material/divider';
import { TimeAgoPipe } from './pipe/time-ago.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { GithubRepoDetailsPopupComponent } from './components/github-repo-details-popup/github-repo-details-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { MatButtonModule } from '@angular/material/button';
import { RepositoryComponent } from './components/repository/repository.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent, 
    RepositoryComponent, 
    GithubRepoDetailsPopupComponent,
    StarRatingComponent,      
    TimeAgoPipe,    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    InfiniteScrollModule,
    HttpClientModule,
    MatDividerModule,
    MatToolbarModule,
    MatCardModule,   
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatProgressSpinnerModule,
    NgIf,
    NgFor,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,       
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
