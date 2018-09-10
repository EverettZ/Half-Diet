import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBackgrounderComponent } from './svg-backgrounder.component';

describe('SvgBackgrounderComponent', () => {
  let component: SvgBackgrounderComponent;
  let fixture: ComponentFixture<SvgBackgrounderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgBackgrounderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgBackgrounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
