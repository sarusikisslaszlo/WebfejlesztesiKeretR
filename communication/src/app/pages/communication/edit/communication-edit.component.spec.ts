import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunicationEditComponent } from './communication-edit.component';

describe('EditComponent', () => {
  let component: CommunicationEditComponent;
  let fixture: ComponentFixture<CommunicationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
