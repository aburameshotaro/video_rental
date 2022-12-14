import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared.service';
import { AddRentalsComponent } from './add-rentals/add-rentals.component';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit {

  rentalsList:any=[]

  constructor(private shared:SharedService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.refreshRentalsList();
  }

  refreshRentalsList(){
    this.rentalsList.push({client:"Staszek Kowalski", film:"Shrek", date_added:"2022.12.07 12:00:00", 
    supposed_return:"2022.12.09 12:00:00", real_return:""});
  }


  addRental(){
    const modalRef = this.modalService.open(AddRentalsComponent, {
      ariaLabelledBy: 'modal-basic-title',
      windowClass: 'modal',
      size: 'lg',
    })

    modalRef.result.then((result) => {
      this.refreshRentalsList()
    });
  }

  returnFilm(rental:any){
    if(confirm('Are you sure??')){
      this.shared.returnFilm(rental.id).subscribe(data=>{
        alert(data.toString());
        this.refreshRentalsList();
      })
    }
  }

}
