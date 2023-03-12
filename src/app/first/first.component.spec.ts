import { ComponentFixture, TestBed } from '@angular/core/testing';import { DataService } from '../service/data.service';

import { FirstComponent } from './first.component';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;
  let service:DataService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DataService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should function myfunction run correct', () => {
    const result = component.myfunction(2);
    expect(result).toEqual(4);
  });
  it('should function form api run correct', () => {
    fixture.detectChanges();
    spyOn(service,"hello");
    component.ngOnInit()
    expect(service.hello).toHaveBeenCalled();
  });
});
