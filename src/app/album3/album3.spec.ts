import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album3 } from './album3';

describe('Album3', () => {
  let component: Album3;
  let fixture: ComponentFixture<Album3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Album3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Album3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
