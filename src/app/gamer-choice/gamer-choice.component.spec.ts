import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerChoiceComponent } from './gamer-choice.component';

describe('GamerChoiceComponent', () => {
  let component: GamerChoiceComponent;
  let fixture: ComponentFixture<GamerChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamerChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
