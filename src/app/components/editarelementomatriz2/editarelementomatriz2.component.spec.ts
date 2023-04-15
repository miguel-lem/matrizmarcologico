import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editarelementomatriz2Component } from './editarelementomatriz2.component';

describe('Editarelementomatriz2Component', () => {
  let component: Editarelementomatriz2Component;
  let fixture: ComponentFixture<Editarelementomatriz2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Editarelementomatriz2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editarelementomatriz2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
