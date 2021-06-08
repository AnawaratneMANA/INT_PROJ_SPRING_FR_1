import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUserTableComponent } from './project-user-table.component';

describe('ProjectUserTableComponent', () => {
  let component: ProjectUserTableComponent;
  let fixture: ComponentFixture<ProjectUserTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectUserTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
