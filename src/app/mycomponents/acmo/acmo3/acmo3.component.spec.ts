import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acmo3Component } from './acmo3.component';

describe('Acmo3Component', () => {
  let component: Acmo3Component;
  let fixture: ComponentFixture<Acmo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Acmo3Component]
    });
    fixture = TestBed.createComponent(Acmo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
