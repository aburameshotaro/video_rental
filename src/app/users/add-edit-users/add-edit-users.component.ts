import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-users',
  templateUrl: './add-edit-users.component.html',
  styleUrls: ['./add-edit-users.component.css']
})
export class AddEditUsersComponent implements OnInit {

  constructor(private shared:SharedService,public activeModal: NgbActiveModal,config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  @Input() userGiven:any;
  @Input() modalTitle:any;
  @Input() edit:any;
  user:any=[];
  


  ngOnInit(): void {
    this.user = this.userGiven;
  }


  updateEmployee(){
    var val = {
      id:this.user.id,
      first_name:this.user.first_name,
      last_name:this.user.last_name,
      phone_number:this.user.phone_number,
      street_name:this.user.street_name,
      street_number:this.user.street_number,
      flat_number:this.user.flat_number,
      city:this.user.city,
      postcode:this.user.postcode,

    }
    console.log(val)
    if (!this.edit){
      this.shared.addUser(val).subscribe(res=>{
   
        this.activeModal.close();
        alert(res.toString());
      });
    }
    else{
      this.shared.updateUser(val).subscribe(res=>{
   
        this.activeModal.close();
        alert(res.toString());
      });
    }
    
  }



  closeModal() {
    this.activeModal.close();
  }

}
