import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() =>{
    fixture = TestBed.createComponent(AppComponent); 
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have a heading', () =>{
    const heading = fixture.debugElement.nativeElement.querySelector('#heading');
    expect(heading).toBeTruthy();
  })

  it('should have a heading that matches the page title', () => {
    const title : string = "Testing Sandbox";
    const heading = fixture.debugElement.nativeElement.querySelector('#heading');
    expect(heading.textContent).toEqual(title);
  })

});
