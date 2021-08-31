import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });



  it(`should show no cookie consent request when it was already accepted'`, () => {
    //Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;


    //action
    app.setCookieConsent();//setting the consent

    //Assert    
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.cookie'))).toBeNull();
  });


  it(`should show cookie consent request when it was not accepted'`, () => {
    //Arrange
    const fixture = TestBed.createComponent(AppComponent);

    //Assert    
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.cookie'))).toBeTruthy();
  });

});
