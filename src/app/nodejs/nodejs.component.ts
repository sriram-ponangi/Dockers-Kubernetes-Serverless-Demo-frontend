import { Component, OnInit } from '@angular/core';
import { NodejsService } from '../services/nodejs.service';

@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.css']
})
export class NodejsComponent implements OnInit {

  allKeys = [];
  keyValue = '';
  updateResponse: any;
  deletedResponse: any;
  constructor(private service: NodejsService) {}

  ngOnInit(): void {
  }

  getKeys(pattern: string) {
    this.service.getKeys(pattern).subscribe( (data: any) => {
      console.log(JSON.stringify(data));
      this.allKeys = data;
    });
  }

  searchValue(key: string) {
    this.service.searchValue(key).subscribe( (data: any) => {
      console.log(JSON.stringify(data));
      this.keyValue = data;
    });
  }

  updateValue(key: string, value: string) {
    this.service.updateValue(key, value).subscribe( (data: any) => {
      console.log(JSON.stringify(data));
      this.updateResponse = data;
    });
  }

  removeKey(key: string) {
    this.service.deleteKey(key).subscribe( (data: any) => {
      console.log(JSON.stringify(data));
      this.deletedResponse = data;
    });
  }

}
