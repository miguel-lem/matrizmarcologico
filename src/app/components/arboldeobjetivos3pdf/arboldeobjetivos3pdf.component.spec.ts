import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arboldeobjetivos3pdfComponent } from './arboldeobjetivos3pdf.component';

describe('Arboldeobjetivos3pdfComponent', () => {
  let component: Arboldeobjetivos3pdfComponent;
  let fixture: ComponentFixture<Arboldeobjetivos3pdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arboldeobjetivos3pdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arboldeobjetivos3pdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
