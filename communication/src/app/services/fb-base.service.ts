import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService<T extends { id?: string }>  {

  constructor(private afs: AngularFirestore) { }

  get(collectionName: string): Observable<T[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('priority', 'asc');
      return query;
    }).valueChanges() as Observable<T[]>;
  }

  async add(collectionName: string, data: T, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  getById(collectionName: string, id: string): Observable<any> {
    return this.afs.collection(collectionName).doc(id).valueChanges();
  }

  update(collectionName: string, id: string, data: any) {
    return this.afs.collection(collectionName).doc(id).update(data);
  }

  delete(collectionName: string, id: string) {
    return this.afs.collection(collectionName).doc(id).delete();
  }
}
