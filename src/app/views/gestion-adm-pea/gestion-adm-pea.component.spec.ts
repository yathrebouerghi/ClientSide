import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdmPeaComponent } from './gestion-adm-pea.component';

describe('GestionAdmPeaComponent', () => {
  let component: GestionAdmPeaComponent;
  let fixture: ComponentFixture<GestionAdmPeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAdmPeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionAdmPeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
