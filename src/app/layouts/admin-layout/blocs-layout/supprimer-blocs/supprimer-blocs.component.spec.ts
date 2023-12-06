import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerBlocsComponent } from './supprimer-blocs.component';

describe('SupprimerBlocsComponent', () => {
  let component: SupprimerBlocsComponent;
  let fixture: ComponentFixture<SupprimerBlocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerBlocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerBlocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
