import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouffleCakesComponent } from './souffle-cakes.component';

describe('SouffleCakesComponent', () => {
  let component: SouffleCakesComponent;
  let fixture: ComponentFixture<SouffleCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouffleCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouffleCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
