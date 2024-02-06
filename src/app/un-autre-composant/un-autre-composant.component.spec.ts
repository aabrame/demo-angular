import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAutreComposantComponent } from './un-autre-composant.component';

describe('UnAutreComposantComponent', () => {
  let component: UnAutreComposantComponent;
  let fixture: ComponentFixture<UnAutreComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnAutreComposantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnAutreComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
