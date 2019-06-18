import { Role } from './role';

export interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    //fechaNacimiento?: Date;
    //role?: Role;

    //calcularEdad(fechaNacimiento: Date): number;
}
