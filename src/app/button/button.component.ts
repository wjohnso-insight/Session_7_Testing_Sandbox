import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  }

  handleClick(): void{
    this.logger.log('Button clicked...')
  }
}
