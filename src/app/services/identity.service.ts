import { Injectable } from '@angular/core';
import { IUser, Role } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  user: IUser | undefined;

  constructor() { }

  aunthenticate():Observable<IUser>{

  }
}

const USER_DATA: IUser[] = [
  {
    name: 'usuario',
    password: '12345',
    role: Role.user,
    userName: 'Usuario test'
  },
  {name: 'admin',
  
  }
]

