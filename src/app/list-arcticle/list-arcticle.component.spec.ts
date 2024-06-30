import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArcticleComponent } from './list-arcticle.component';

describe('ListArcticleComponent', () => {
  let component: ListArcticleComponent;
  let fixture: ComponentFixture<ListArcticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListArcticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListArcticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
