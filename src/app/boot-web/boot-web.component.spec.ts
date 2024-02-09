import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootWebComponent } from './boot-web.component';

describe('BootWebComponent', () => {
  let component: BootWebComponent;
  let fixture: ComponentFixture<BootWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootWebComponent]
    });
    fixture = TestBed.createComponent(BootWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
