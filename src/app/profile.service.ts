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

  //takes the name and image from the login screen and holds them for future use
  profile(name: string, image: string): void{
  //if the user puts no-name, then they will be assigned to Guest
    if(name==''){
      name = 'Guest'
    }
  //if user puts no image, then they will be assigned to a default image
    if(image == ''){
      image = 'https://themindsetproject.com.au/wp-content/uploads/2017/08/avatar-icon.png'
    }
    this.pName = name;
    this.pImage = image;

    localStorage.setItem('pImage', this.pImage);
    localStorage.setItem('pName', this.pName);
  }

}

