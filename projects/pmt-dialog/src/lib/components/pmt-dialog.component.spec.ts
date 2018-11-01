import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmtDialogComponent } from './pmt-dialog.component';

describe('PmtDialogComponent', () => {
  let component: PmtDialogComponent;
  let fixture: ComponentFixture<PmtDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmtDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
