import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acmo2Component } from './acmo2.component';

describe('Acmo2Component', () => {
  let component: Acmo2Component;
  let fixture: ComponentFixture<Acmo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Acmo2Component]
    });
    fixture = TestBed.createComponent(Acmo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
