import { Injectable} from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable} from 'rxjs';
import { PokemonCapture } from 'src/app/Interfaces/pokemon-capture';

@Injectable({
  providedIn: 'root'
})
export class PokemonCaptureServiceService {
  constructor(private afs: AngularFirestore) {
  }
  /**
  * Add a new capture
  *
  * @param capture - a PokemonCapture object
  */

  async addCapture(capture: PokemonCapture){
    try{
      await this.afs.collection('captures').add( capture );}
    catch (error) {
      console.log(error)
    }
  }

  /**
  * Delete a capture of a certain id
  *
  * @param id - The id of the capture
  */
  async delCapture(id: string){
    try {
      await this.afs.collection('captures').doc(id).delete();
    }
    catch (error) {
      console.log(error)
    }
  }

  /**
  * Watch captures of the current user
  *
  * @param userId - the current user's id
  *
  * @returns An observable with captures of the current user
  *
  */
  getCaptures(userId: string): Observable< PokemonCapture[] >{
    return this.afs.collection< PokemonCapture >('captures', ref => {return ref.where('userId', '==', userId)}).valueChanges();
  }
}

