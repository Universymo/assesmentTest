import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiceComponent } from './mice.component';

describe('MiceComponent', () => {
  let component: MiceComponent;
  let fixture: ComponentFixture<MiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
