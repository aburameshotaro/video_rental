import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-full-description',
  templateUrl: './full-description.component.html',
  styleUrls: ['./full-description.component.css']
})
export class FullDescriptionComponent implements OnInit {

  constructor(private shared:SharedService,public activeModal: NgbActiveModal,config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  @Input() filmGiven:any;
  @Input() modalTitle:any;
  @Input() edit:any;
  film:any=[];

  ngOnInit(): void {
    this.film = this.filmGiven;
  }

  closeModal() {
    this.activeModal.close();
  }

}
