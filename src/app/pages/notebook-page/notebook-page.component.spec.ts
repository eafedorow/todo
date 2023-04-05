import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookPageComponent } from './notebook-page.component';

describe('NotebookPageComponent', () => {
  let component: NotebookPageComponent;
  let fixture: ComponentFixture<NotebookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotebookPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotebookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
