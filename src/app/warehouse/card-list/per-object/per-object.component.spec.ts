import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerObjectComponent } from './per-object.component';

describe('PerObjectComponent', () => {
  let component: PerObjectComponent;
  let fixture: ComponentFixture<PerObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerObjectComponent]
    });
    fixture = TestBed.createComponent(PerObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
