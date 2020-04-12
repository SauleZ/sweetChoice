import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuffCakesComponent } from './puff-cakes.component';

describe('PuffCakesComponent', () => {
  let component: PuffCakesComponent;
  let fixture: ComponentFixture<PuffCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuffCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuffCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
