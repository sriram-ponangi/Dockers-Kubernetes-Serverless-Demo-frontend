import { Component, OnInit } from '@angular/core';
import { SpringbootService } from '../services/springboot.service';

@Component({
  selector: 'app-springboot',
  templateUrl: './springboot.component.html',
  styleUrls: ['./springboot.component.css']
})
export class SpringbootComponent implements OnInit {

  info: any;

  constructor(private service: SpringbootService) {
    this.getQuote();
  }

  ngOnInit() {
  }

  getQuote() {
    this.service.getQuote().subscribe( (data: any) => {
      console.log(JSON.stringify(data));
      this.info = data;
    });
  }

}
