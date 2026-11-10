import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album2 } from './album2';

describe('Album2', () => {
  let component: Album2;
  let fixture: ComponentFixture<Album2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Album2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Album2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
