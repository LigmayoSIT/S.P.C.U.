import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicViewingPage } from './public-viewing-page';

describe('PublicViewingPage', () => {
  let component: PublicViewingPage;
  let fixture: ComponentFixture<PublicViewingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicViewingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicViewingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
