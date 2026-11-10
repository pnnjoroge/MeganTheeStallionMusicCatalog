import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album4 } from './album4';

describe('Album4', () => {
  let component: Album4;
  let fixture: ComponentFixture<Album4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Album4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Album4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
