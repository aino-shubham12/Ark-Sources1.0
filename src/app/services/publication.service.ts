import { Injectable } from '@angular/core';
import { PublicationsMock } from '../mock-data';
import { Publication } from '../publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService implements Publication {

  constructor() { }
  Name: string;
  Type: string;
  Language: string;
  Category: string;
  Country: string;
  Region: string;
  Expirydate: any;

  getPublicationData() {
    console.log("inside get()");
    console.log(PublicationsMock);
    return PublicationsMock;   
  }


}