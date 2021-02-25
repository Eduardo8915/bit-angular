import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactershistoryComponent } from './charactershistory.component';

describe('CharactershistoryComponent', () => {
  let component: CharactershistoryComponent;
  let fixture: ComponentFixture<CharactershistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactershistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactershistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
