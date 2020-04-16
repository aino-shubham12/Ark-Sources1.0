import { Component, OnInit } from '@angular/core';
import { GridData } from '@ainosoft/appops-core-components/components/enterprise-grid/dist/enterprise-grid'; 
import { PublicationService } from '../services/publication.service';
import { PublicationActionDispatcher } from '../action-dispatcher/PublicationActionDispatcher';

@Component({
  selector: 'app-publication-grid',
  templateUrl: './publication-grid.component.html',
  styleUrls: ['./publication-grid.component.scss']
})

export class PublicationGridComponent implements OnInit , GridData {

  gridConfig =[];
  pubGridDataPromise;
  girdHeader: string = "Publication";
 
publicationActionDispatcher = new PublicationActionDispatcher();

columnConfig = [{name:'checkbox',item:'',position:0},
{name:'Name',item:'Name',position:1},{name:'Type',item:'Type',position:2},
{name:'Language',item:'Language',position:3},{name:'Category',item:'Category',position:4},{name:'Country',item:'Country',position:5},
{name:'Region',item:'Region',position:6},{name:'Expirydate',item:'Expiry Date',position:7}];


pubGridConfig = [{
  'addNewUserForm': { enable: true, token: 'add-new-user-form' },
  'enableActionToolbar': { enable: true, token: 'enable-action-toolbar' },
  'enableSearchToolBar': { enable: true, token: 'enable-search-toolbar' },
  'enableSearchPlaceholder': { enable: 'block', token: 'enable-search-placeholder' },
  'enableSearchBar': { enable: 'none', token: 'enable-search-bar' }
}];

constructor(public publicationService:PublicationService) {
  this.gridConfig.push(this.girdHeader);
  this.gridConfig.push(this.columnConfig);
  this.gridConfig.push(this.pubGridConfig);
}

ngOnInit(): void {
  this.pubGridDataPromise = this.getFirstPage();
  console.log(this.pubGridDataPromise);
}


getFirstPage():Promise<any>
{
  console.log("Inside getFirstPage()");

  console.log(this.pubGridDataPromise);
  console.log();
    let promise = new Promise((resolve, reject) => {
        Promise.all(
          this.publicationService.getPublicationData()    
  ).then(
            result => {
                console.log(result);
                resolve(result);
            },
            error => {
                console.log(error);
                reject(error);
            }
        );
    });
    return promise;
  }
  
}


