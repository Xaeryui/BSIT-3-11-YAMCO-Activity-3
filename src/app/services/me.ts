import { Injectable } from '@angular/core';
import { Me } from '../interfaces/me';

@Injectable({
  providedIn: 'root'
})
export class MeService {
  private me: Me = {
    image: 'assets/profilephoto/Formal Picture.jpg',
    name: 'Karylle Yamco',
    username: 'kayeiou',
    email: 'karealymco@gmail.com',
    address: 'Valenzuela City, Philippines'
  };

  constructor() { }

  getMe(): Me {
    return this.me;
  }
}