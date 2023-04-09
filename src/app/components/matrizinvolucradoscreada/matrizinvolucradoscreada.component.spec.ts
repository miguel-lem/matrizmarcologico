import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizinvolucradoscreadaComponent } from './matrizinvolucradoscreada.component';

describe('MatrizinvolucradoscreadaComponent', () => {
  let component: MatrizinvolucradoscreadaComponent;
  let fixture: ComponentFixture<MatrizinvolucradoscreadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrizinvolucradoscreadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrizinvolucradoscreadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
