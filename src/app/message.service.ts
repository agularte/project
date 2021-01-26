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
    this.msg_db.set("random", this.random);
    this.msg_db.set("internalProjects", this.internalProjects);
    this.msg_db.set("client", this.client);
    console.log("complete");
   }

  ngOnInit(){}

  loadData(key : string){
    if(this.msg_db.has(key)){
      return this.msg_db.get(key);
    }
    else{
      console.error("no data from this key : ", key);
    }
  }

  checkSamePerson(
    tab : message[],
    enter_name : string
    ) : boolean{
      return tab[tab.length - 1].name == enter_name;
    }

  pushMessage(
    key : string,
    _image : string,
    _name : string,
    _date : string,
    _chat : string
    ){
      if(this.msg_db.has(key)){

        let tmpTab : message[] = this.msg_db.get(key);

        if(this.checkSamePerson(tmpTab, _name)){
          tmpTab[tmpTab.length - 1].chat.push(_chat);
        }
        else{
          let new_message : message = {
            image: _image,
            name: _name,
            date: _date,
            chat: [_chat]
          }
  
          tmpTab.push(new_message);
        }
      }
      else{
        console.error("no data from this key : ", key);
      }
    }
}

