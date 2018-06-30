import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  tableHeader = [];

  constructor() { }

  ngOnInit() {
    $(document).ready( function () {
      $('#orderTable').DataTable();

    } );
  }

  openFilter(){


    var $panel = $('.dataTables_filter') ,
         $entry =  $('.dataTables_length');

      $panel.slideToggle(30);
      $entry.slideToggle(30);


}


}







