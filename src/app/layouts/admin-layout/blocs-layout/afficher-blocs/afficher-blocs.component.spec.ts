import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherBlocsComponent } from './afficher-blocs.component';

describe('AfficherBlocsComponent', () => {
  let component: AfficherBlocsComponent;
  let fixture: ComponentFixture<AfficherBlocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherBlocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherBlocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
