import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arboldeobjetivos3creadoComponent } from './arboldeobjetivos3creado.component';

describe('Arboldeobjetivos3creadoComponent', () => {
  let component: Arboldeobjetivos3creadoComponent;
  let fixture: ComponentFixture<Arboldeobjetivos3creadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arboldeobjetivos3creadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arboldeobjetivos3creadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
