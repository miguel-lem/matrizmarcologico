import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizmarcologicoComponent } from './matrizmarcologico.component';

describe('MatrizmarcologicoComponent', () => {
  let component: MatrizmarcologicoComponent;
  let fixture: ComponentFixture<MatrizmarcologicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrizmarcologicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrizmarcologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
