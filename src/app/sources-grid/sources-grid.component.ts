import { Component, OnInit } from '@angular/core';
import { PublicationActionDispatcher } from '../action-dispatcher/PublicationActionDispatcher';
import { SourcesService } from '../services/sources.service';
import { GridData } from '@ainosoft/appops-core-components/components/enterprise-grid/dist/enterprise-grid';

@Component({
  selector: 'app-sources-grid',
  templateUrl: './sources-grid.component.html',
  styleUrls: ['./sources-grid.component.scss']
})
export class SourcesGridComponent implements OnInit ,GridData {

  
  gridConfig =[];
  srcGridDataPromise;
  girdHeader: string = "Sources";
 
publicationActionDispatcher = new PublicationActionDispatcher();

columnConfig = [{name:'checkbox',item:'',position:0},
  {name:'Name',item:'Sources name',top:-'10px',position:1},{name:'Type',item:'Publication of sources',position:2}];



srcGridConfig = [{
  'addNewUserForm': { enable: true, token: 'add-new-user-form' },
  'enableActionToolbar': { enable: true, token: 'enable-action-toolbar' },
  'enableSearchToolBar': { enable: true, token: 'enable-search-toolbar' },
  'enableSearchPlaceholder': { enable: 'block', token: 'enable-search-placeholder' },
  'enableSearchBar': { enable: 'none', token: 'enable-search-bar' }
}];

constructor(private srcService:SourcesService) {
  this.gridConfig.push(this.girdHeader);
  this.gridConfig.push(this.columnConfig);
  this.gridConfig.push(this.srcGridConfig);
}

ngOnInit(): void {
  this.srcGridDataPromise = this.getFirstPage();
  console.log(this.srcGridDataPromise);
}


getFirstPage():Promise<any>
{
  console.log("Inside getFirstPage()");

  console.log(this.srcGridDataPromise);
  console.log();
    let promise = new Promise((resolve, reject) => {
        Promise.all(
          this.srcService.getSourcesData()    
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
