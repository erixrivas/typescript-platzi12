import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { player } from '../interfaces/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
 
  constructor(private firestore: AngularFirestore) {
  
  }
  createPlayer(data: any) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("players")
            .add(data)
            .then(res => {}, err => reject(err));
    });
  }


  getPlayers() { 
    return      this.firestore.collection("players").snapshotChanges();
  }

  updatePlayers(data:any) {
    return
        this.firestore
        .collection("players")
        .doc(data.payload.doc.id)
        .set({ completed: true }, { merge: true });
 }

 deletePlayers(data:any) {
  return
      this.firestore
      .collection("players")
      .doc(data.payload.doc.id)
      .delete();
}
}
