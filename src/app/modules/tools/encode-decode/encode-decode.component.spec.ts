import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncodeDecodeComponent } from './encode-decode.component';

describe('EncodeDecodeComponent', () => {
  let component: EncodeDecodeComponent;
  let fixture: ComponentFixture<EncodeDecodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncodeDecodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncodeDecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
