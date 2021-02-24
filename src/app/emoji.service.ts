/*

  This service should:
    [] Provide emoji for a 'Emoji Viewer' component to render
      
      getEmoji(targetEmoji: string): string{
          switch(targetEmoji){
            case 'smile':
              return " 😀 "
          }
      }
    [] When getEmoji is called it should output a message to the terminal using Logger service

      In the test spec, this injected service / dependency should be mocked using jasmine.createSpyObj() 

*/
import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service'

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  constructor(private logger: LoggerService) { }
  
  getEmoji(targetEmoji: string): string{
    switch (targetEmoji) {
      case 'smile':
        this.logger.log('Returned smile emoji.')
        return '😀'
      case 'shades':
        this.logger.log('Returned shades emoji.')
        return '🕶'
      case 'cat-fart':
        this.logger.log('Returned cat-fart emoji.')
        return '🐈💨'
      default:
        this.logger.log('Did not return an emoji. ')
        return 'error'
    }
  }
}
