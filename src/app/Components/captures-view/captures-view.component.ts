import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonCapture } from 'src/app/Interfaces/pokemon-capture';
import { PokemonCaptureServiceService } from 'src/app/Services/Pokemon/pokemon-capture-service.service';

@Component({
  selector: 'app-captures-view',
  templateUrl: './captures-view.component.html',
  styleUrls: ['./captures-view.component.scss']
})
export class CapturesViewComponent implements OnInit {
  constructor( private pkmnService: PokemonCaptureServiceService ) { }

  ngOnInit(): void {
  }

}
