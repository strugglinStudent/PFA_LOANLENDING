import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DetailInstallmentsComponent } from './detail-installments.component';
import { SharedModule } from './../../../shared/shared.module';
import { InstallmentsService } from './../../../services/installments.service';
import { EventsService } from './../../../services/events.service';

describe('DetailInstallmentsComponent', () => {
  let component: DetailInstallmentsComponent;
  let fixture: ComponentFixture<DetailInstallmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, SharedModule ],
      declarations: [ DetailInstallmentsComponent ],
      providers: [ InstallmentsService, EventsService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailInstallmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
