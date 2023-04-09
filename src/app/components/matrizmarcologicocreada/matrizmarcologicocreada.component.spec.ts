import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizmarcologicocreadaComponent } from './matrizmarcologicocreada.component';

describe('MatrizmarcologicocreadaComponent', () => {
  let component: MatrizmarcologicocreadaComponent;
  let fixture: ComponentFixture<MatrizmarcologicocreadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrizmarcologicocreadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrizmarcologicocreadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
