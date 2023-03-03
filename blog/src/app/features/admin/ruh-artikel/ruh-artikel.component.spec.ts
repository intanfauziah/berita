import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuhArtikelComponent } from './ruh-artikel.component';

describe('RuhArtikelComponent', () => {
  let component: RuhArtikelComponent;
  let fixture: ComponentFixture<RuhArtikelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuhArtikelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuhArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
