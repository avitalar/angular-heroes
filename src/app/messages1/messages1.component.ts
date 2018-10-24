import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages1',
  templateUrl: './messages1.component.html',
  styleUrls: ['./messages1.component.css']
})
export class Messages1Component implements OnInit {

  constructor(public messageService: MessageService) {}
  
  ngOnInit() {
  }

}
