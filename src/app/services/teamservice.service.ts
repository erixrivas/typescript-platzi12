import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
 
  constructor(private firestore: AngularFirestore) {
  
  }
  createTeam(data: any) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("teams")
            .add(data)
            .then(res => {}, err => reject(err));
    });
  }


  getTeams()    { 
    return this.firestore.collection("teams").snapshotChanges();
     
  }

  updateTeams(data:any) {
    return
        this.firestore
        .collection("teams")
        .doc(data.payload.doc.id)
        .set({ completed: true }, { merge: true });
 }

 deleteTeams(data:any) {
  return
      this.firestore
      .collection("teams")
      .doc(data.payload.doc.id)
      .delete();
}
}
