import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatePageComponent } from './donate-page.component';

describe('DonatePageComponent', () => {
  let component: DonatePageComponent;
  let fixture: ComponentFixture<DonatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
