import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matrizmarcologico3creadaComponent } from './matrizmarcologico3creada.component';

describe('Matrizmarcologico3creadaComponent', () => {
  let component: Matrizmarcologico3creadaComponent;
  let fixture: ComponentFixture<Matrizmarcologico3creadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Matrizmarcologico3creadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Matrizmarcologico3creadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
