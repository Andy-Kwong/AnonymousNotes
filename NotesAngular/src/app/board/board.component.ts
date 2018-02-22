import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {

    messages: any;
    newMessage: any;
    validationError: any; 

    constructor(private _http: HttpService) { 
        this.newMessage = {text: '', createdAt: ''}
    }

    ngOnInit() {
        this.getAllMessages();
    }

    getAllMessages() {
        console.log("Getting all messages!")
        let observable = this._http.getAllMessages();
        observable.subscribe(data => {
            this.messages = data
        });
    }

    submitMessage() {
        console.log(this.newMessage);
        let observable = this._http.addNewMessage(this.newMessage);
        observable.subscribe (data => {
            console.log(data)
            if (data.error.errors.text.message) {
                this.validationError = data.error.errors.text.message;
            }
            console.log(data.error.errors.text.message)
        })
        this.getAllMessages();
        this.newMessage = {text: ''}
    }

}
