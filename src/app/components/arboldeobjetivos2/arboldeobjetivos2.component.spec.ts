import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arboldeobjetivos2Component } from './arboldeobjetivos2.component';

describe('Arboldeobjetivos2Component', () => {
  let component: Arboldeobjetivos2Component;
  let fixture: ComponentFixture<Arboldeobjetivos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arboldeobjetivos2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arboldeobjetivos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
