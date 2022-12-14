import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared.service';
import { AddEditUsersComponent } from './add-edit-users/add-edit-users.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersList:any=[]

  constructor(private shared:SharedService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.refreshUsersList();
  }

  refreshUsersList(){
    this.usersList.push({first_name:"Staszek", last_name:"Kowalski", phone_number:"501501501", city:"Bieruń",
  postcode:"43-150"});
  }

  open(user:any) {
    const modalRef = this.modalService.open(AddEditUsersComponent, {
      ariaLabelledBy: 'modal-basic-title',
      windowClass: 'modal',
      size: 'lg',
    })
    modalRef.componentInstance.userGiven = user;
    modalRef.componentInstance.modalTitle = 'Edytuj użytkownika';
    modalRef.componentInstance.edit = true;
    modalRef.result.then((result) => {
      this.refreshUsersList()
    });
  
  }

  addUser(){
    const modalRef = this.modalService.open(AddEditUsersComponent, {
      ariaLabelledBy: 'modal-basic-title',
      windowClass: 'modal',
      size: 'lg',
    })
    modalRef.componentInstance.userGiven = {};
    modalRef.componentInstance.modalTitle = 'Dodaj użytkownika';
    modalRef.componentInstance.edit = false;
    modalRef.result.then((result) => {
      this.refreshUsersList()
    });
  }

  deleteUser(user:any){
    if(confirm('Are you sure??')){
      this.shared.deleteUser(user.id).subscribe(data=>{
        alert(data.toString());
        this.refreshUsersList();
      })
    }
  }



}
