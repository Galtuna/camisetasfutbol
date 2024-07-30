import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCamisetasComponent } from './lista-camisetas.component';

describe('ListaCamisetasComponent', () => {
  let component: ListaCamisetasComponent;
  let fixture: ComponentFixture<ListaCamisetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCamisetasComponent]
    });
    fixture = TestBed.createComponent(ListaCamisetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
