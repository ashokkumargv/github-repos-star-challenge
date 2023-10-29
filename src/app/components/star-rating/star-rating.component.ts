import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html', 
  encapsulation: ViewEncapsulation.Emulated
})
export class StarRatingComponent  {

  @Input('rating') rating: number = 0;
  @Input('starCount') starCount: number = 5;
  @Input('color') color: string = 'primary';
  @Output()  ratingUpdated = new EventEmitter();  
  @Input('isDisabled') isDisabled: boolean = false;
 
  ratingArr = [];

  constructor() {
  }

  ngOnInit() {    
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating:number) {
    this.ratingUpdated.emit(rating);     
    return false;
  }

  showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}

export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}