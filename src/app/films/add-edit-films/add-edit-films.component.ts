import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-films',
  templateUrl: './add-edit-films.component.html',
  styleUrls: ['./add-edit-films.component.css']
})
export class AddEditFilmsComponent implements OnInit {

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


  updateFilm(){
    var val = {
      id:this.film.id,
      title:this.film.title,
      genre:this.film.genre,
      director:this.film.director,
      length:this.film.length,
      rating:this.film.rating,
      short_description:this.film.short_description,
      actors:this.film.actors
    }
    console.log(val)
    if (!this.edit){
      this.shared.addFilm(val).subscribe(res=>{
   
        this.activeModal.close();
        alert(res.toString());
      });
    }
    else{
      this.shared.updateFilm(val).subscribe(res=>{
   
        this.activeModal.close();
        alert(res.toString());
      });
    }
    
  }



  closeModal() {
    this.activeModal.close();
  }

}
