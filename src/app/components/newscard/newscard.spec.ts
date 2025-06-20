import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newscard } from './newscard';

describe('Newscard', () => {
  let component: Newscard;
  let fixture: ComponentFixture<Newscard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newscard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newscard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
