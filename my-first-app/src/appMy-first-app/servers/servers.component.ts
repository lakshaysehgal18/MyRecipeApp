import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

addServer=false;
serverName : string='Lakshay';

createServer=false;

servers=['testserver1','testserver2'];

  constructor() { 

    setTimeout(() => {
      this.addServer=true;
    },2000);


  }

  ngOnInit() {
  }


  onCreateServer(){
    this.servers.push(this.serverName);
    this.createServer=true;
  }


  onUpdateServer(event: Event)
  {
    this.serverName=(<HTMLInputElement>event.target).value;

  }

}
