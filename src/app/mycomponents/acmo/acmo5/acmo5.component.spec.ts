import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acmo5Component } from './acmo5.component';

describe('Acmo5Component', () => {
  let component: Acmo5Component;
  let fixture: ComponentFixture<Acmo5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Acmo5Component]
    });
    fixture = TestBed.createComponent(Acmo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
