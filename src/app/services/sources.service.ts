import { Injectable } from '@angular/core';
import { Source } from '../publication';
import { SourcesMock } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class SourcesService implements Source {

  constructor() { }
  
  srcName: string;
  Type: string;
  
  getSourcesData()
  {
    console.log("inside getSourcesData()");
    console.log(SourcesMock);
    return SourcesMock;   
  }
}
