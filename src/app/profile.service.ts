import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  pImage: string = '';
  pName: string = '';

  profile(name: string, image: string): void{
    this.pName = name;
    this.pImage = image;
  }

}

