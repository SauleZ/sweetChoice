import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSpongeCakesComponent } from './manage-sponge-cakes.component';

describe('ManageSpongeCakesComponent', () => {
  let component: ManageSpongeCakesComponent;
  let fixture: ComponentFixture<ManageSpongeCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSpongeCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSpongeCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
