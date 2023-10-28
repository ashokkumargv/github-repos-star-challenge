import { TestBed } from '@angular/core/testing';
import { TimeAgoPipe } from './time-ago.pipe';
import { ChangeDetectorRef } from '@angular/core';

describe('TimeAgoPipe', () => {  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeAgoPipe],
        providers: [
          TimeAgoPipe,
            { provide: ChangeDetectorRef, useValue: { detectChanges: () => { } } }
        ]
    });
});


  it('create an instance', () => {
    let pipe = TestBed.inject(TimeAgoPipe);
    expect(pipe).toBeTruthy();
  });
 
  it('should return just now', () => {  
    const recentlyString = 'now';
    const today = new Date(); 
    let pipe = TestBed.inject(TimeAgoPipe);
    expect(pipe.transform(today.toString())).toEqual(recentlyString);
  });

  it('should return a few seconds ago', () => {  
    const today = new Date(); 
    const fewSecondsAgoDate = new Date(today.getTime() - 15 * 1000);
    const fewSecondsAgoString = 'a few seconds ago';
    let pipe = TestBed.inject(TimeAgoPipe);
    expect(pipe.transform(fewSecondsAgoDate.toString())).toEqual(fewSecondsAgoString);
  });

  it('should return a minute ago', () => {
    const today = new Date(); 
    const aMinuteAgoDate = new Date(today.getTime() - 50 * 1000);
    const aMinuteAgoString = 'a minute ago';
    let pipe = TestBed.inject(TimeAgoPipe);
    expect(pipe.transform(aMinuteAgoDate.toString())).toEqual(aMinuteAgoString);
  });

  it('should return 15 minute ago', () => {   
    const today = new Date(); 
    var minutesAgoDate = new Date(today.getTime() - 15*60000);
    const minutesAgoString = '15 minutes ago';
    let pipe = TestBed.inject(TimeAgoPipe);
    expect(pipe.transform(minutesAgoDate.toString())).toEqual(minutesAgoString);
  });

  it('should return an hour ago', () => {   
    const today = new Date(); 
    var anHourAgoDate = new Date(today.getTime() - 66*60000);
    const anHourAgoString = 'an hour ago';
    let pipe = TestBed.inject(TimeAgoPipe);
    expect(pipe.transform(anHourAgoDate.toString())).toEqual(anHourAgoString);
  });

  it('should return 5 hours ago', () => {   
    const today = new Date(); 
    var hoursAgoDate = new Date(today.getTime() - 5*3600000);
    const hoursAgoString = '5 hours ago';
    let pipe = TestBed.inject(TimeAgoPipe);
    expect(pipe.transform(hoursAgoDate.toString())).toEqual(hoursAgoString);
  });


  it('should return a day ago', () => {   
    const today = new Date(); 
    var dayAgoDate = new Date(today.getTime() - 28*3600000);
    const dayAgoString = 'a day ago';
    let pipe = TestBed.inject(TimeAgoPipe);
    expect(pipe.transform(dayAgoDate.toString())).toEqual(dayAgoString);
  });

  it('should return 5 days ago', () => {   
    const today = new Date();    
    today.setDate(today.getDate() -5)
    var daysAgoDate = today;   
    const daysAgoString = '5 days ago';
    let pipe = TestBed.inject(TimeAgoPipe);
    expect(pipe.transform(daysAgoDate.toString())).toEqual(daysAgoString);
  });
});
