import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Repository } from 'src/app/model/repository.model';
import { StarRatingColor } from 'src/app/components/star-rating/star-rating.component';

@Component({
  selector: 'app-github-repo-details-popup',
  templateUrl: './github-repo-details-popup.component.html'  
})
export class GithubRepoDetailsPopupComponent { 
  rating:number = 0;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;


  constructor(
    public dialogRef: MatDialogRef<GithubRepoDetailsPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Repository,
  ) { }


 ngOnInit():void{
   this.rating = this.data.star_rating;
 }

  onSubmit(): void {  
   this.dialogRef.close();
  }

  onRatingChanged(rating:number){
    this.rating = rating;
  }

}
