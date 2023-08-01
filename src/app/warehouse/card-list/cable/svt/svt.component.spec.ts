import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvtComponent } from './svt.component';

describe('SvtComponent', () => {
  let component: SvtComponent;
  let fixture: ComponentFixture<SvtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvtComponent]
    });
    fixture = TestBed.createComponent(SvtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
