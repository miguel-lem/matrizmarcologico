import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arboldeobjetivos3Component } from './arboldeobjetivos3.component';

describe('Arboldeobjetivos3Component', () => {
  let component: Arboldeobjetivos3Component;
  let fixture: ComponentFixture<Arboldeobjetivos3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arboldeobjetivos3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arboldeobjetivos3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
