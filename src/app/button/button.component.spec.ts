import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be a button', () => { 
    const button = fixture.debugElement.query(By.css('button'));
    expect(button).toBeTruthy();
  })

  it('should say Click Me!', () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.textContent).toEqual('Click Me!');
  })

  it('should print to console on click', fakeAsync(() => {
    spyOn(component, 'handleClick');
    
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    
    expect(component.handleClick).toHaveBeenCalled();
  }))

});
