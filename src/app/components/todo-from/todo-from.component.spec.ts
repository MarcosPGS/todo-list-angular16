import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFromComponent } from './todo-from.component';

describe('TodoFromComponent', () => {
  let component: TodoFromComponent;
  let fixture: ComponentFixture<TodoFromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TodoFromComponent]
    });
    fixture = TestBed.createComponent(TodoFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
