import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arbolcausaefecto3pdfComponent } from './arbolcausaefecto3pdf.component';

describe('Arbolcausaefecto3pdfComponent', () => {
  let component: Arbolcausaefecto3pdfComponent;
  let fixture: ComponentFixture<Arbolcausaefecto3pdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arbolcausaefecto3pdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arbolcausaefecto3pdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
