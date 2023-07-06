import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acmo4Component } from './acmo4.component';

describe('Acmo4Component', () => {
  let component: Acmo4Component;
  let fixture: ComponentFixture<Acmo4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Acmo4Component]
    });
    fixture = TestBed.createComponent(Acmo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
