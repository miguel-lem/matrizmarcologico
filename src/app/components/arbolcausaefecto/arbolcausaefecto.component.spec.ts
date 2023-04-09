import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolcausaefectoComponent } from './arbolcausaefecto.component';

describe('ArbolcausaefectoComponent', () => {
  let component: ArbolcausaefectoComponent;
  let fixture: ComponentFixture<ArbolcausaefectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbolcausaefectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbolcausaefectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
