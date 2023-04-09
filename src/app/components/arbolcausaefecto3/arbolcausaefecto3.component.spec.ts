import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arbolcausaefecto3Component } from './arbolcausaefecto3.component';

describe('Arbolcausaefecto3Component', () => {
  let component: Arbolcausaefecto3Component;
  let fixture: ComponentFixture<Arbolcausaefecto3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arbolcausaefecto3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arbolcausaefecto3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
