import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceHumaineComponent } from './ressource-humaine.component';

describe('RessourceHumaineComponent', () => {
  let component: RessourceHumaineComponent;
  let fixture: ComponentFixture<RessourceHumaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RessourceHumaineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessourceHumaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
