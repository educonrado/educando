import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FirebaseService } from 'src/app/services/firebase.service';
import { Categoria } from 'src/app/model/categoria';
import { Cuenta } from 'src/app/model/cuenta';
import { format } from 'url';
import { Gasto } from 'src/app/model/gasto';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  valor: number;
  public gastoForm: FormGroup;
  categoria: Categoria;
  fechaActual: Date;
  cuentas: Cuenta[];
  gastos: Gasto[];
  categoriasGasto: Categoria[];

  constructor(
    private _firebaseService: FirebaseService,
    private _route: Router,
    public _fb: FormBuilder //Servicio para Reactive forms
  ) { 
    this.fechaActual= new Date;
  }

  ngOnInit() {
    this.valor = 0.0;
    this.gastForm();
    this.getCategoriasGasto();
    this.getCuentas();
  }

  gastForm(){
    this.gastoForm = this._fb.group({
      valor:[0.00, [Validators.required, Validators.min, Validators.maxLength ]],
      descripcion:['', ],
      realizado: [true],
      categoria: {
        nombre:[''],
        icono:[''],
        color:['']
      },
      cuenta: {
        nombre:[''],
        saldo:[''],
        color:['']
      },
      fecha: [new Date().toISOString().substring(0,10)]
    })
  }

  onSubmit(){ 
    this._firebaseService.crearGasto(this.gastoForm.value)
    .then(
      res=>{
        this._route.navigate(['/dashboard']);
      }
    );

  }

  getGastos(){
    this._firebaseService.obtenerGastos().subscribe(data=>{
      this.gastos = data.map(e=>{
        return {
          $key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Gasto;
      })
    });
  }  
  getCategoriasGasto(){
    this._firebaseService.obtenerCategoriasGastos().subscribe(data=>{
      this.categoriasGasto = data.map(e=>{
        return {
          $key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Categoria
      })
    });
  }
  getCuentas(){
    this._firebaseService.obtenerCuentas().subscribe(data=>{
      this.cuentas = data.map(e=>{
        return {
          $key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Cuenta
      })
    });
  }

}
