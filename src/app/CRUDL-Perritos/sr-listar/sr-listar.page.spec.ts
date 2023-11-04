import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SrListarPage } from './sr-listar.page';

describe('SrListarPage', () => {
  let component: SrListarPage;
  let fixture: ComponentFixture<SrListarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SrListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
