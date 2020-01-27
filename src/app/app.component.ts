import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent {
  url ="http://127.0.0.1:5000/";
  displayedColumns: string[] = ['list_price', 'dollars_off', 'net_price', 
      'percent_off', 'harmony_cost', 'cost_concessions', 'special_cost', 'net_cost', 'comments'];
  
  price:any = [];    
  dataSource = new MatTableDataSource(this.price);

  constructor(private http: HttpClient){
    this.http.get(this.url).subscribe(response =>{
      this.price = response;
      console.log(this.price)
      this.dataSource.data = this.price;
    });
  }
}
