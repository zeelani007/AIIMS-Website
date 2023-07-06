import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acmo6Component } from './acmo6.component';

describe('Acmo6Component', () => {
  let component: Acmo6Component;
  let fixture: ComponentFixture<Acmo6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Acmo6Component]
    });
    fixture = TestBed.createComponent(Acmo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
