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
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Canonization_2014-The_Canonization_of_Saint_John_XXIII_and_Saint_John_Paul_II_%2814036966125%29.png/636px-Canonization_2014-The_Canonization_of_Saint_John_XXIII_and_Saint_John_Paul_II_%2814036966125%29.png',
      name: 'Pope Francis',
      date: '01/26/2021 08:50 PM',
      chat: ['Hello, Welcome to the general channel'],
      index: 0
    },
    {
      image: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg',
      name: 'Barack Obama',
      date: '01/26/2021 08:52 PM',
      chat: ['Hello', 'nice to meet you, my fellow Americans'],
      index: 1
    }
  ];
  marketing : message[] = [
    {
      image: 'https://www.dw.com/image/55598269_401.jpg',
      name: 'Donald Trump',
      date: '01/26/2021 08:50 PM',
      chat: ['This is the marketing channel', 'Its the best channel', 'I do all my business here'],
      index: 0
    },
    {
      image: 'https://i.insider.com/5fa8311bf7d1cb0019e3a6ce?width=700',
      name: 'George W. Bush',
      date: '01/26/2021 08:52 PM',
      chat: ['Is this where I can sell my paintings?'],
      index: 1
    },
    {
      image: 'https://pds.joins.com/news/component/newsis/201809/15/NISI20180914_0000201868_web.jpg',
      name: '정홍섭',
      date: '01/28/2021 11:33 AM',
      chat: ['All the students did well!'],
      index: 2
    }
  ];
  random : message[] = [
    {
      image: 'https://www.biography.com/.image/t_share/MTY2NDcwODAyODk0NDk2OTI5/gilbert_stuart_williamstown_portrait_of_george_washington_promo.jpg',
      name: 'George Washington',
      date: '01/26/2021 08:50 PM',
      chat: ['Greetings', 'Pleasure to meet you'],
      index: 0
    },
    {
      image: 'https://www.royal.uk/sites/default/files/styles/grid_2x2/public/images/biography/pa-54618298.jpg?itok=XA72cBAc&anti-cache=2881f2af4167d',
      name: 'The Queen',
      date: '01/26/2021 08:52 PM',
      chat: ['How do I use this thing?'],
      index: 1
    },
    {
      image: 'https://storage.googleapis.com/afs-prod/media/media:c51a033232a64e3cab1d54381833797f/800.jpeg',
      name: '문재인',
      date: '01/26/2021 08:56 PM',
      chat: ['안녕하세요', '사람이 먼저다'],
      index: 2
    },
    {
      image: 'https://www.csustan.edu/sites/default/files/resize/groups/Office%20of%20the%20President/retouched-president_junn_portraits-6-250x375.jpg',
      name: 'Ellen Junn',
      date: '01/26/2021 08:56 PM',
      chat: ['If Dr. Kim says that team 2 is the best I will give him a raise'],
      index: 3
    },
    {
      image: 'https://www.cs.csustan.edu/~dkim/images/me_face.jpg',
      name: 'Danny Kim',
      date: '01/26/2021 08:57 PM',
      chat: ['Team 2 is the best team!'],
      index: 4
    },

  ];
  internalProjects : message[] = [
    {
      image: 'https://static.highsnobiety.com/thumbor/4hLayGIPXtfxFQlZ11TYaO5HDQI=/1600x1067/static.highsnobiety.com/wp-content/uploads/2020/08/25141404/biden-sunnies-mask-main1.jpg',
      name: 'Joe Biden',
      date: '01/26/2021 08:50 PM',
      chat: ['Hello everyone', 'This place is a mess, let me try to fix it a little'],
      index: 0
    }
  ];
  client : message[] = [
    {
      image: 'https://cdn-japantimes.com/wp-content/uploads/2020/12/np_file_57472.jpeg',
      name: 'Angela Merkel',
      date: '01/26/2021 08:51 PM',
      chat: ['Warum bin ich in diesem chat?'],
      index: 0
    }
  ];
  
  

  constructor(
    private readonly profile: ProfileService,
  ) {
    // before push arrays to map init arrays using local storage value
    this.setLocalStorageData2Array();

    this.msg_db.set("general", this.general);
    this.msg_db.set("marketing", this.marketing);
    this.msg_db.set("random", this.random);
    this.msg_db.set("internalProjects", this.internalProjects);
    this.msg_db.set("client", this.client);
    console.log("complete");
   }

  ngOnInit(){}

  // return message data by key
  loadData(key : string){
    if(this.msg_db.has(key)){
      console.log(this.general);

      return this.msg_db.get(key);
    }
    else{
      console.error("no data from this key : ", key);
    }
  }

  // check tab's last element and entered name is same
  // return boolean
  checkSamePerson(
    tab : message[],
    enter_name : string
    ) : boolean{
      if(tab.length == 0) return false;

      //get last element and compare entered name
      return tab[tab.length - 1].name == enter_name;
    }

  // push chat or make new message obj to array
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

    //delete message obj by index
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

    //set data's index by order
    resetIndex(tab : message[]){
      for(let i = 0;i < tab.length; i++){
        tab[i].index = i;
      }
    }

    // ------ handle local storage ------

    //initialize if localstorage has key value
    setLocalStorageData2Array(){

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

    //save message data to local storage
    saveData(key : string){
      localStorage.setItem(key, JSON.stringify(this.msg_db.get(key)));
    }
}

