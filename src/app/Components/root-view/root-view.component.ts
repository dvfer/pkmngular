import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { UserInfo } from "firebase/auth";

@Component({
  selector: 'app-root-view',
  templateUrl: './root-view.component.html',
  styleUrls: ['./root-view.component.scss']
})
export class RootViewComponent implements OnInit {
  authState!: UserInfo | null;
  constructor( public authService: AuthServiceService ) { }

  ngOnInit(): void {
    this.authService.getObservableCurrentUser.subscribe( (value: UserInfo | null) => {
      console.log(value);
      this.authState = value;
    } )
  }

}
