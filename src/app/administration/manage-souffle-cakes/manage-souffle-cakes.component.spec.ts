import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSouffleCakesComponent } from './manage-souffle-cakes.component';

describe('ManageSouffleCakesComponent', () => {
  let component: ManageSouffleCakesComponent;
  let fixture: ComponentFixture<ManageSouffleCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSouffleCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSouffleCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
