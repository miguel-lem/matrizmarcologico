import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arbolcausaefecto2Component } from './arbolcausaefecto2.component';

describe('Arbolcausaefecto2Component', () => {
  let component: Arbolcausaefecto2Component;
  let fixture: ComponentFixture<Arbolcausaefecto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arbolcausaefecto2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arbolcausaefecto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
