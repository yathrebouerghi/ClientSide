import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDirComponent } from './profile-dir.component';

describe('ProfileDirComponent', () => {
  let component: ProfileDirComponent;
  let fixture: ComponentFixture<ProfileDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
