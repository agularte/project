import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalProjectsComponent } from './internal-projects.component';

describe('InternalProjectsComponent', () => {
  let component: InternalProjectsComponent;
  let fixture: ComponentFixture<InternalProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
