import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpongeCakesComponent } from './sponge-cakes.component';

describe('SpongeCakesComponent', () => {
  let component: SpongeCakesComponent;
  let fixture: ComponentFixture<SpongeCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpongeCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpongeCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
