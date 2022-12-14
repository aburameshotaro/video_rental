import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-rentals',
  templateUrl: './add-rentals.component.html',
  styleUrls: ['./add-rentals.component.css']
})
export class AddRentalsComponent implements OnInit {

  rental: any = [];
  constructor(private shared:SharedService,public activeModal: NgbActiveModal,config: NgbModalConfig) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  addRental(){
    var val = {
      first_name:this.rental.first_name,
      last_name:this.rental.last_name,
      title:this.rental.title
    }

    console.log(val)
    this.shared.addRental(val).subscribe(res=>{
        this.activeModal.close();
        alert(res.toString());
      });
    
  }


  closeModal() {
    this.activeModal.close();
  }

}
