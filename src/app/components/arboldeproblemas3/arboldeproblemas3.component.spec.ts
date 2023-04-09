import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arboldeproblemas3Component } from './arboldeproblemas3.component';

describe('Arboldeproblemas3Component', () => {
  let component: Arboldeproblemas3Component;
  let fixture: ComponentFixture<Arboldeproblemas3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arboldeproblemas3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arboldeproblemas3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
