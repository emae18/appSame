import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegajosDosComponent } from './legajos-dos.component';

describe('LegajosDosComponent', () => {
  let component: LegajosDosComponent;
  let fixture: ComponentFixture<LegajosDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegajosDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegajosDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
