import { Gasto } from './../../model/gasto';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public gastos: Gasto[] = [];
  public totalGastos: number = 0;
  constructor(
    private _firebaseService: FirebaseService
  ) {
   }

  ngOnInit() {
    this.cargarGastos();
    this.calcularGastoTotal();
  }

  cargarGastos(){
    this._firebaseService.obtenerGastos().subscribe(data=>{
      this.gastos = data.map(e=>{
        return {
          $key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Gasto;
      })
    });
  }

  calcularGastoTotal(){
    /*for (let index = 0; index < this.gastos.length; index++) {
      const element = this.gastos[index];
      this.totalGastos += element.valor;
      console.log(this.totalGastos);
    }*/
    this.gastos.forEach(element => {
      this.totalGastos=this.totalGastos+element.valor;
    });
  }

}
