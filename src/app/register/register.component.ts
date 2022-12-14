import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:any={};
  
  constructor( private service:SharedService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.user);
    
  }

}
