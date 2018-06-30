import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  tableHeader = [];

  constructor() {

    this.tableHeader =
    [
      'Name' ,
      'Phone',
      'Address',
      'Postal Code',
      'Creadit Card No.',
      'Regestration date',
      'Last Active'



    ]
  }

  ngOnInit() {
    $(document).ready( function () {
      $('#customerTable').DataTable();

    } );

}

openFilter(){


  var $panel = $('.dataTables_filter') ,
       $entry =  $('.dataTables_length');

    $panel.slideToggle(30);
    $entry.slideToggle(30);


}

}