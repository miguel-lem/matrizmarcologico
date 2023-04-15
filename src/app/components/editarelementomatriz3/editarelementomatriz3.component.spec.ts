import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editarelementomatriz3Component } from './editarelementomatriz3.component';

describe('Editarelementomatriz3Component', () => {
  let component: Editarelementomatriz3Component;
  let fixture: ComponentFixture<Editarelementomatriz3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Editarelementomatriz3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editarelementomatriz3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
