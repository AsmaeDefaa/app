import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineAreaComponent } from './line-area.component';

describe('LineAreaComponent', () => {
  let component: LineAreaComponent;
  let fixture: ComponentFixture<LineAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
