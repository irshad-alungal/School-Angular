import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNOTfoundComponent } from './page-notfound.component';

describe('PageNOTfoundComponent', () => {
  let component: PageNOTfoundComponent;
  let fixture: ComponentFixture<PageNOTfoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNOTfoundComponent]
    });
    fixture = TestBed.createComponent(PageNOTfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
