import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoslosproblemasComponent } from './todoslosproblemas.component';

describe('TodoslosproblemasComponent', () => {
  let component: TodoslosproblemasComponent;
  let fixture: ComponentFixture<TodoslosproblemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoslosproblemasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoslosproblemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
