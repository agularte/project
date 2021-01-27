import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() {
    if(this.pImage == '' || this.pName == ''){
      this.pImage = localStorage.getItem("pImage");
      this.pName = localStorage.getItem("pName");
    }
   }

  pImage: string = '';
  pName: string = '';

  profile(name: string, image: string): void{
    this.pName = name;
    this.pImage = image;

    localStorage.setItem('pImage', this.pImage);
    localStorage.setItem('pName', this.pName);
  }

}

