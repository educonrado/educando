import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  valor: number;
  constructor() { }

  ngOnInit() {
    this.valor = 0.0;
  }

}
