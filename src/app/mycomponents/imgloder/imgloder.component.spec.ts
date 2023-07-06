import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgloderComponent } from './imgloder.component';

describe('ImgloderComponent', () => {
  let component: ImgloderComponent;
  let fixture: ComponentFixture<ImgloderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgloderComponent]
    });
    fixture = TestBed.createComponent(ImgloderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
