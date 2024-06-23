import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersChatComponent } from './users-chat.component';

describe('UsersChatComponent', () => {
  let component: UsersChatComponent;
  let fixture: ComponentFixture<UsersChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
