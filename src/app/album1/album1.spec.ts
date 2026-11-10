import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album1 } from './album1';

describe('Album1', () => {
  let component: Album1;
  let fixture: ComponentFixture<Album1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Album1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Album1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
