import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Communication } from '../shared/models/communication.model';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

  constructor(private afs: AngularFirestore) { }

  async add(collectionName: string, data: Communication, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  weakAdd(collectionName: string, data: Communication) {
    return this.afs.collection(collectionName).add(data);
  }
}
