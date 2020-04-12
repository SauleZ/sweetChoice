import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWeddingCakesComponent } from './manage-wedding-cakes.component';

describe('ManageWeddingCakesComponent', () => {
  let component: ManageWeddingCakesComponent;
  let fixture: ComponentFixture<ManageWeddingCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageWeddingCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWeddingCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
