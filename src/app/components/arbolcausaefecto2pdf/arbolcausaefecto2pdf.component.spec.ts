import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arbolcausaefecto2pdfComponent } from './arbolcausaefecto2pdf.component';

describe('Arbolcausaefecto2pdfComponent', () => {
  let component: Arbolcausaefecto2pdfComponent;
  let fixture: ComponentFixture<Arbolcausaefecto2pdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arbolcausaefecto2pdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arbolcausaefecto2pdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
