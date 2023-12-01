import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBoxComponent } from './icon-box.component';

describe('IconBoxComponent', () => {
  let component: IconBoxComponent;
  let fixture: ComponentFixture<IconBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconBoxComponent]
    });
    fixture = TestBed.createComponent(IconBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
