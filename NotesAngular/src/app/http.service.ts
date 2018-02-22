import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private _http: HttpClient) { }

    getAllMessages() {
        return this._http.get('/messages');
    }

    addNewMessage(message) {
        return this._http.post('/messages', message);
    }

}
