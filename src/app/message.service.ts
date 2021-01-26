import { Injectable } from '@angular/core';
import { message } from './interface/message.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  msg_db = new Map();

  general : message[] = [
    {
      image: 'https://www.dw.com/image/55598269_401.jpg',
      name: 'Donald Trump',
      date: 'Today at 01:32am',
      chat: ['Hi', 'Nice to meet you', 'Lets start work']
    },
    {
      image: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg',
      name: 'Barack Obama',
      date: 'Today at 01:47am',
      chat: ['Hello']
    }
  ];
  marketing : message[] = [
    {
      image: 'https://www.dw.com/image/55598269_401.jpg',
      name: 'new chr1',
      date: 'Today at 01:32am',
      chat: ['Hi', 'Nice to meet you']
    },
    {
      image: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg',
      name: 'new chr2',
      date: 'Today at 01:47am',
      chat: ['Hello']
    }
  ];
  random : message[] = [
    {
      image: 'https://www.dw.com/image/55598269_401.jpg',
      name: 'This is random channel',
      date: 'Today at 01:32am',
      chat: ['Hi', 'Nice to meet you', 'Lets start work']
    }
  ];
  internalProjects : message[] = [
    {
      image: 'https://www.dw.com/image/55598269_401.jpg',
      name: 'This is Internal Projects channel',
      date: 'Today at 01:32am',
      chat: ['Hi', 'Nice to meet you', 'Lets start work']
    }
  ];
  client : message[] = [
    {
      image: 'https://www.dw.com/image/55598269_401.jpg',
      name: 'This is client channel',
      date: 'Today at 01:32am',
      chat: ['Hi', 'Nice to meet you', 'Lets start work']
    }
  ];
  
  

  constructor() {
    this.msg_db.set("general", this.general);
    this.msg_db.set("marketing", this.marketing);
    this.msg_db.set("random", this.marketing);
    this.msg_db.set("interanlProjects", this.marketing);
    this.msg_db.set("client", this.marketing);
    console.log("complete");
   }

  ngOnInit(){}

  loadData(key : string){
    if(this.msg_db.has(key)){
      return this.msg_db.get(key);
    }
    else{
      return console.error("no data from this key : ", key);
    }
  }
 }
