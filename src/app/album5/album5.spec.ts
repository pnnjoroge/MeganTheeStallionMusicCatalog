import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album5 } from './album5';

describe('Album5', () => {
  let component: Album5;
  let fixture: ComponentFixture<Album5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Album5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Album5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
