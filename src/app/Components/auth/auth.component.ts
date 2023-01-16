import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../Services/auth-service.service'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor( public authService: AuthServiceService ) { }

  ngOnInit(): void {
  }

}
