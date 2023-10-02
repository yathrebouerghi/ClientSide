import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartionEleveComponent } from './repartion-eleve.component';

describe('RepartionEleveComponent', () => {
  let component: RepartionEleveComponent;
  let fixture: ComponentFixture<RepartionEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepartionEleveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepartionEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
