import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArboldeproblemasComponent } from './arboldeproblemas.component';

describe('ArboldeproblemasComponent', () => {
  let component: ArboldeproblemasComponent;
  let fixture: ComponentFixture<ArboldeproblemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArboldeproblemasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArboldeproblemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
