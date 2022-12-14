import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared.service';
import { AddEditFilmsComponent } from './add-edit-films/add-edit-films.component';
import { FullDescriptionComponent } from './full-description/full-description.component';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmsList:any=[]

  constructor(private shared:SharedService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.refreshFilmsList();
  }

  refreshFilmsList(){
    this.filmsList.push({title:"Shrek", genre:["Komedia", "Horror"], director:"dafjasfas", 
    length:"120 mins", short_description:"Ogr walczy o swój dom", rating:8.5, actors:["Sebastian Tomczok", "Mama"]});
  }

  rentFilm(film:any){

  }

  addFilm(){
    const modalRef = this.modalService.open(AddEditFilmsComponent, {
      ariaLabelledBy: 'modal-basic-title',
      windowClass: 'modal',
      size: 'lg',
    })
    modalRef.componentInstance.filmGiven = {};
    modalRef.componentInstance.modalTitle = 'Dodaj film';
    modalRef.componentInstance.edit = false;
    modalRef.result.then((result) => {
      this.refreshFilmsList()
    });
  }

  editFilm(film:any){
    const modalRef = this.modalService.open(AddEditFilmsComponent, {
      ariaLabelledBy: 'modal-basic-title',
      windowClass: 'modal',
      size: 'lg',
    })
    modalRef.componentInstance.filmGiven = film;
    modalRef.componentInstance.modalTitle = 'Edytuj film';
    modalRef.componentInstance.edit = true;
    modalRef.result.then((result) => {
      this.refreshFilmsList()
    });
  }

  deleteFilm(film:any){
    if(confirm('Are you sure??')){
      this.shared.deleteFilm(film.id).subscribe(data=>{
        alert(data.toString());
        this.refreshFilmsList();
      })
    }
  }

  showFullDescription(film:any){
    const modalRef = this.modalService.open(FullDescriptionComponent, {
      ariaLabelledBy: 'modal-basic-title',
      windowClass: 'modal',
      size: 'lg',
    })
    modalRef.componentInstance.filmGiven = film;
    modalRef.result.then((result) => {
      this.refreshFilmsList()
    });
  }

}
