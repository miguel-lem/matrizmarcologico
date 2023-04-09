import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArboldeobjetivoscreadoComponent } from './arboldeobjetivoscreado.component';

describe('ArboldeobjetivoscreadoComponent', () => {
  let component: ArboldeobjetivoscreadoComponent;
  let fixture: ComponentFixture<ArboldeobjetivoscreadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArboldeobjetivoscreadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArboldeobjetivoscreadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
