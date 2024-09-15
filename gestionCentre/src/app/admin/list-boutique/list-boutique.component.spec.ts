import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBoutiqueComponent } from './list-boutique.component';

describe('ListBoutiqueComponent', () => {
  let component: ListBoutiqueComponent;
  let fixture: ComponentFixture<ListBoutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBoutiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
