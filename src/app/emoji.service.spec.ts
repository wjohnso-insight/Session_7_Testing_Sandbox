import { TestBed } from '@angular/core/testing';

import { EmojiService } from './emoji.service';

describe('EmojiService', () => {
  let service: EmojiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmojiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have returned an emoji', () => {
    
    const emoji = service.getEmoji('smile');
    expect(emoji).toEqual("😀");
    
  })

  it('should have logged to the console once', () => {

    const logger = jasmine.createSpyObj('logger', ['log']) //Created spy object with baseName of 'logger' and a method of 'log'

    service.getEmoji('smile');
    expect(logger.log).toHaveBeenCalledTimes(1);
  })
});
