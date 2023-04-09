import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizinvolucradosComponent } from './matrizinvolucrados.component';

describe('MatrizinvolucradosComponent', () => {
  let component: MatrizinvolucradosComponent;
  let fixture: ComponentFixture<MatrizinvolucradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrizinvolucradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrizinvolucradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
