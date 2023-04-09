import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArboldeobjetivosComponent } from './arboldeobjetivos.component';

describe('ArboldeobjetivosComponent', () => {
  let component: ArboldeobjetivosComponent;
  let fixture: ComponentFixture<ArboldeobjetivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArboldeobjetivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArboldeobjetivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
