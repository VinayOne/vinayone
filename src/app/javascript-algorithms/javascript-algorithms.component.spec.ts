import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptAlgorithmsComponent } from './javascript-algorithms.component';

describe('JavascriptAlgorithmsComponent', () => {
  let component: JavascriptAlgorithmsComponent;
  let fixture: ComponentFixture<JavascriptAlgorithmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptAlgorithmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptAlgorithmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
