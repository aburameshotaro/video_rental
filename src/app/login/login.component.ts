import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  display_name: any;
  password: any;
  
  constructor( private service:SharedService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
  
    let val = {
      username:this.display_name,
      password:this.password,
    }
    
  }

}
