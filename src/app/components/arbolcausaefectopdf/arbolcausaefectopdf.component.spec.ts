import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolcausaefectopdfComponent } from './arbolcausaefectopdf.component';

describe('ArbolcausaefectopdfComponent', () => {
  let component: ArbolcausaefectopdfComponent;
  let fixture: ComponentFixture<ArbolcausaefectopdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbolcausaefectopdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbolcausaefectopdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
