import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acmo1Component } from './acmo1.component';

describe('Acmo1Component', () => {
  let component: Acmo1Component;
  let fixture: ComponentFixture<Acmo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Acmo1Component]
    });
    fixture = TestBed.createComponent(Acmo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
