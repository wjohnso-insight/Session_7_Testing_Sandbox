import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService; //Calling the actual service and not a stub

   /* 
      The reason we actually test on a real instance of LoggerService is because we are testing that unit. If we were testing a unit that uses the logger service, 
      we would mock 'logger', to keep that unit isolated and ensuring that any failures are directly related to that unit and not being polluted by an error in the logger service
   */  

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log input to console', () => {

    spyOn(console, 'log');

    service.log('Test')
    expect(console.log).toHaveBeenCalledWith('Test');
    
  })
});
