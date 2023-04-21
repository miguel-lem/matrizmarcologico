import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arboldeobjetivos2pdfComponent } from './arboldeobjetivos2pdf.component';

describe('Arboldeobjetivos2pdfComponent', () => {
  let component: Arboldeobjetivos2pdfComponent;
  let fixture: ComponentFixture<Arboldeobjetivos2pdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arboldeobjetivos2pdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arboldeobjetivos2pdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
