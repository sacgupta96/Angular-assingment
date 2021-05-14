import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterNumberComponent } from './center-number.component';

describe('CenterNumberComponent', () => {
  let component: CenterNumberComponent;
  let fixture: ComponentFixture<CenterNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
