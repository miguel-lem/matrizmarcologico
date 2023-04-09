import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matrizmarcologico2creadaComponent } from './matrizmarcologico2creada.component';

describe('Matrizmarcologico2creadaComponent', () => {
  let component: Matrizmarcologico2creadaComponent;
  let fixture: ComponentFixture<Matrizmarcologico2creadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Matrizmarcologico2creadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Matrizmarcologico2creadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
