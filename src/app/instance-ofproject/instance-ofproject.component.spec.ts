import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceOfprojectComponent } from './instance-ofproject.component';

describe('InstanceOfprojectComponent', () => {
  let component: InstanceOfprojectComponent;
  let fixture: ComponentFixture<InstanceOfprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InstanceOfprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstanceOfprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
