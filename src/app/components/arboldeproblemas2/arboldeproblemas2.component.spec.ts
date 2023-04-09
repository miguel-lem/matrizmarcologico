import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arboldeproblemas2Component } from './arboldeproblemas2.component';

describe('Arboldeproblemas2Component', () => {
  let component: Arboldeproblemas2Component;
  let fixture: ComponentFixture<Arboldeproblemas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arboldeproblemas2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arboldeproblemas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
