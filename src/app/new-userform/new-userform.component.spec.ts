import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserformComponent } from './new-userform.component';

describe('NewUserformComponent', () => {
  let component: NewUserformComponent;
  let fixture: ComponentFixture<NewUserformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
