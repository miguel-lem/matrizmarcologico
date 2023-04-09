import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matrizmarcologico3Component } from './matrizmarcologico3.component';

describe('Matrizmarcologico3Component', () => {
  let component: Matrizmarcologico3Component;
  let fixture: ComponentFixture<Matrizmarcologico3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Matrizmarcologico3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Matrizmarcologico3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
