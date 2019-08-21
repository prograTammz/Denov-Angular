import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoulettePageComponent } from './roulette-page.component';

describe('RoulettePageComponent', () => {
  let component: RoulettePageComponent;
  let fixture: ComponentFixture<RoulettePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoulettePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoulettePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
