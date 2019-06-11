import { Categoria } from './categoria';
import { Cuenta } from './cuenta';

export interface Gasto {
    $key: string;
    valor:number;
    realizado: boolean;
    descripcion:string;
    categoria: Categoria;
    cuenta: Cuenta;
    fecha: Date;
}
