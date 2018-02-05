import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentServiceComponent } from './comment-service.component';

describe('CommentServiceComponent', () => {
  let component: CommentServiceComponent;
  let fixture: ComponentFixture<CommentServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
