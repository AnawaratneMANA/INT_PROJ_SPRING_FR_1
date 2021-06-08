import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceControlAccessPageComponent } from './source-control-access-page.component';

describe('SourceControlAccessPageComponent', () => {
  let component: SourceControlAccessPageComponent;
  let fixture: ComponentFixture<SourceControlAccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceControlAccessPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceControlAccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
