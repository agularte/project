import { Injectable } from '@angular/core';
import { message } from './interface/message.interface';
import { ProfileService } from './profile.service'

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
      chat: ['Hi', 'Nice to meet you', 'Lets start work'],
      index: 0
    },
    {
      image: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg',
      name: 'Barack Obama',
      date: 'Today at 01:47am',
      chat: ['Hello'],
      index: 1
    }
  ];
  marketing : message[] = [
    {
      image: 'https://www.dw.com/image/55598269_401.jpg',
      name: 'new chr1',
      date: 'Today at 01:32am',
      chat: ['Hi', 'Nice to meet you'],
      index: 0
    },
    {
      image: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg',
      name: 'new chr2',
      date: 'Today at 01:47am',
      chat: ['Hello'],
      index: 1
    }
  ];
  random : message[] = [
    {
      image: 'https://www.dw.com/image/55598269_401.jpg',
      name: 'This is random channel',
      date: 'Today at 01:32am',
      chat: ['Hi', 'Nice to meet you', 'Lets start work'],
      index: 0
    }
  ];
  internalProjects : message[] = [
    {
      image: 'https://www.dw.com/image/55598269_401.jpg',
      name: 'This is Internal Projects channel',
      date: 'Today at 01:32am',
      chat: ['Hi', 'Nice to meet you', 'Lets start work'],
      index: 0
    }
  ];
  client : message[] = [
    {
      image: 'https://www.dw.com/image/55598269_401.jpg',
      name: 'This is client channel',
      date: 'Today at 01:32am',
      chat: ['Hi', 'Nice to meet you', 'Lets start work'],
      index: 0
    }
  ];
  
  

  constructor(
    private readonly profile: ProfileService,
  ) {
    this.setLocalStorageData2Array();
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
      console.log(this.general);

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
      if(tab.length == 0) return false;

      //get last element and compare entered name
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

        if(this.checkSamePerson(tmpTab, this.profile.pName)){
          tmpTab[tmpTab.length - 1].chat.push(_chat);
        }
        else{
          let new_message : message = {
            image: this.profile.pImage,
            name: this.profile.pName,
            date: _date,
            chat: [_chat],
            index: tmpTab.length
          }
  
          tmpTab.push(new_message);
        }
        this.saveData(key);
      }
      else{
        console.error("no data from this key : ", key);
      }
    }

    delMessage(
      key : string,
      index : number
    ){
      if(this.msg_db.has(key)){
        //delete one from the index
        this.msg_db.get(key).splice(index, 1);

        this.resetIndex(this.msg_db.get(key));
        this.saveData(key);
      }
      else{
        console.error("no data from this key : ", key);
      }
    }

    //set idex by order
    resetIndex(tab : message[]){
      for(let i = 0;i < tab.length; i++){
        tab[i].index = i;
      }
    }

    // ------ handle local stroage ------

    setLocalStorageData2Array(){
      
      //initialize if localstorage has key value

      if(localStorage.getItem('general') != null)
        this.general = JSON.parse(localStorage.getItem('general'));
      
      if(localStorage.getItem('marketing') != null)
        this.marketing = JSON.parse(localStorage.getItem('marketing'));

      if(localStorage.getItem('random') != null)  
        this.random = JSON.parse(localStorage.getItem('random'));

      if(localStorage.getItem('internalProjects') != null)
        this.internalProjects = JSON.parse(localStorage.getItem('internalProjects'));

      if(localStorage.getItem('client') != null)
        this.client = JSON.parse(localStorage.getItem('client'));
      
    }

    saveData(key : string){
      localStorage.setItem(key, JSON.stringify(this.msg_db.get(key)));
    }
}

