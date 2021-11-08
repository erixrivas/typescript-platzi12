import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { player } from '../interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playersDb : AngularFirestoreCollection<player>
  constructor(private db :AngularFirestore) {
    
   }
}
