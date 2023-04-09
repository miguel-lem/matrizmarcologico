import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matrizmarcologico2Component } from './matrizmarcologico2.component';

describe('Matrizmarcologico2Component', () => {
  let component: Matrizmarcologico2Component;
  let fixture: ComponentFixture<Matrizmarcologico2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Matrizmarcologico2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Matrizmarcologico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
