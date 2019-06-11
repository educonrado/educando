import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Gasto } from '../model/gasto';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  baseGastos: string = 'gastos';
  baseCuentas: string = 'cuenta';
  baseCategoria: string = 'categoria';
  gastoRef: any;
  updateA: any;

  constructor(
    //Cloud FIRESTORE
    private _db: AngularFirestore
    //Otra alternativa sería realtime databse
  ) { }

  crearGasto(value: Gasto){
    //console.log(this._db.collection(this.baseCategoria);
/*    this.gastoRef = this._db.collection(this.baseGastos).doc('T9jUKHbJBXdIRsmo8D4x');
    this.updateA= this.gastoRef.update({nombre: 'Pepudo'});*/
    return this._db.collection(this.baseGastos).add({
      valor: value.valor,
      descripcion: value.descripcion,
      realizado: value.realizado,
      categoria: value.categoria,
      cuenta: value.cuenta,
      fecha: value.fecha
    });
  }

  obtenerGastos(){
   return this._db.collection(this.baseGastos).snapshotChanges();   
  }

  obtenerCategoriasGastos(){
    return this._db.collection(this.baseCategoria, ref => ref.where("tipo", "==", "gasto")).snapshotChanges();
  }
  
  obtenerCuentas(){
    return this._db.collection(this.baseCuentas).snapshotChanges();
  }
}
