import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArboldeobjetivospdfComponent } from './arboldeobjetivospdf.component';

describe('ArboldeobjetivospdfComponent', () => {
  let component: ArboldeobjetivospdfComponent;
  let fixture: ComponentFixture<ArboldeobjetivospdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArboldeobjetivospdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArboldeobjetivospdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
