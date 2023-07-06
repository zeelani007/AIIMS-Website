import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RishikeshComponent } from './rishikesh.component';

describe('RishikeshComponent', () => {
  let component: RishikeshComponent;
  let fixture: ComponentFixture<RishikeshComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RishikeshComponent]
    });
    fixture = TestBed.createComponent(RishikeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
