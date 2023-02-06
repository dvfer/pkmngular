import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/Auth/auth-service.service';
import { UserInfo } from "firebase/auth";
import { PokemonCaptureServiceService } from 'src/app/Services/Pokemon/pokemon-capture-service.service';

@Component({
  selector: 'app-root-view',
  templateUrl: './root-view.component.html',
  styleUrls: ['./root-view.component.scss']
})
export class RootViewComponent implements OnInit {
  authState!: UserInfo | null;
  constructor( public authService: AuthServiceService, private pkmnService: PokemonCaptureServiceService ) { }

  ngOnInit(): void {

  }

}
