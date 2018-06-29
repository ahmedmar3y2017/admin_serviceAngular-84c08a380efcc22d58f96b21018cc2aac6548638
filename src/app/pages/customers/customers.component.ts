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

    // to open filter input
      $(function(){
      $.noConflict();

      $('#CustomerTable').DataTable();



      $( ".card").on('click', '.card-header .filter', function(e){
        var $this = $(this),
        $panel = $('.dataTables_filter') ,
        $entry =  $('.dataTables_length');

        setTimeout(() => {
          $panel.toggleClass('inline', 10000);
          $entry.toggleClass('inline' , 10000);
            }, 100);


        if($panel.css('display') != 'none') {
          $('.dataTables_filter input').focus();
        }
    });

  })
}

}
