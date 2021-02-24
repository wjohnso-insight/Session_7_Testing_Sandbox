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
    expect(emoji).toBe("😀");
    
  })

  it('should have logged to the console once', () => {
    const logger = jasmine.createSpyObj('LoggerService', ['log']) //Created spy object with baseName of 'LoggerService' and a method of 'log'
    const emojiService = new EmojiService(logger); //Still don't understand this part???
    emojiService.getEmoji('smile');
    expect(logger.log).toHaveBeenCalledTimes(1);
  })
});
