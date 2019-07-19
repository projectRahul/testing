import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidlibComponent } from './vidlib.component';

describe('VidlibComponent', () => {
  let component: VidlibComponent;
  let fixture: ComponentFixture<VidlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
