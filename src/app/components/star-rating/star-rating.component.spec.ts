import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { StarRatingComponent } from './star-rating.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('StarRatingComponent', () => {
  let component: StarRatingComponent;
  let fixture: ComponentFixture<StarRatingComponent>;
    

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarRatingComponent],    
      imports: [ 
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatTooltipModule]
    })    
    .compileComponents();;
    fixture = TestBed.createComponent(StarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should display component default mode", () => {  
  expect(component.isDisabled).toBe(false);
});

it("should display component disable mode", () => {  
  fixture.componentInstance.isDisabled = true;
  expect(component.isDisabled).toBe(true);
});


it("should display component rating count default 5 ", () => {    
  const starButtonElements =  fixture.debugElement.nativeElement.querySelectorAll('button').length;//selectTrigger.nativeElement.attributes['ng-reflect-disabled'].value;//.att.querySelector('app-star-rating');
  expect(starButtonElements).toBe(5);
});

it("should display component rating count 4 ", () => {
    fixture = TestBed.createComponent(StarRatingComponent);
    component = fixture.componentInstance;
    component.starCount=4;
    fixture.detectChanges();
  const starButtonElements =  fixture.debugElement.nativeElement.querySelectorAll('button');
  expect(starButtonElements.length).toBe(4);
});

it("should display component rated star clic event", () => {
  fixture = TestBed.createComponent(StarRatingComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
  const starButtonElements =  fixture.debugElement.nativeElement.querySelectorAll('button');
  let i =0;
  spyOn(component.ratingUpdated, 'emit');
  starButtonElements.forEach(element => {    
    if(i<2)
    {
      element.click(i+1);    
      fixture.detectChanges();    
      i++;
    }
  }); 
  expect(component.ratingUpdated.emit).toHaveBeenCalledWith(2);
  expect(component.ratingUpdated.emit).toHaveBeenCalledTimes(2);
});


});
