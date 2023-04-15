import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarelementomatrizComponent } from './editarelementomatriz.component';

describe('EditarelementomatrizComponent', () => {
  let component: EditarelementomatrizComponent;
  let fixture: ComponentFixture<EditarelementomatrizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarelementomatrizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarelementomatrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
