import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTimestampComponent } from './new-timestamp.component';

describe('NewTimestampComponent', () => {
  let component: NewTimestampComponent;
  let fixture: ComponentFixture<NewTimestampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTimestampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
