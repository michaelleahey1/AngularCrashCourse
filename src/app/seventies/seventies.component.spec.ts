import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventiesComponent } from './seventies.component';

describe('SeventiesComponent', () => {
  let component: SeventiesComponent;
  let fixture: ComponentFixture<SeventiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeventiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeventiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
