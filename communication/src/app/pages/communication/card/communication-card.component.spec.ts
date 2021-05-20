import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationCardComponent } from './communication-card.component';

describe('CommunicationCardComponent', () => {
  let component: CommunicationCardComponent;
  let fixture: ComponentFixture<CommunicationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
