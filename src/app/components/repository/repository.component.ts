import { Component, Input } from '@angular/core';
import { Repository } from '../../model/repository.model';
import { MatDialog, } from '@angular/material/dialog';
import { GithubRepoDetailsPopupComponent } from '../github-repo-details-popup/github-repo-details-popup.component'
import { StarRatingColor } from 'src/app/components/star-rating/star-rating.component';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html', 
})
export class RepositoryComponent {
  @Input() repo:Repository;

  rating:number = 0;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}  

  openDialog():  void {   
    this.repo.star_rating = this.rating;
    const dialogRef = this.dialog.open(GithubRepoDetailsPopupComponent, {
      data: this.repo,
      maxHeight:'99vh',
      maxWidth:'99vw',
      height: '85%',
      width: '80%',
    });

    
    dialogRef.afterClosed().subscribe( result => {  
      if(result!=='undefined')
      {
        this.rating = result;  
      }
    });
  }
}
