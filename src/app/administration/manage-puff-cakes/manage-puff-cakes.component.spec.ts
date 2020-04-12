import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePuffCakesComponent } from './manage-puff-cakes.component';

describe('ManagePuffCakesComponent', () => {
  let component: ManagePuffCakesComponent;
  let fixture: ComponentFixture<ManagePuffCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePuffCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePuffCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
