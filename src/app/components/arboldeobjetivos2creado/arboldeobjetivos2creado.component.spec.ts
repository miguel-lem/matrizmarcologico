import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arboldeobjetivos2creadoComponent } from './arboldeobjetivos2creado.component';

describe('Arboldeobjetivos2creadoComponent', () => {
  let component: Arboldeobjetivos2creadoComponent;
  let fixture: ComponentFixture<Arboldeobjetivos2creadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arboldeobjetivos2creadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arboldeobjetivos2creadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
