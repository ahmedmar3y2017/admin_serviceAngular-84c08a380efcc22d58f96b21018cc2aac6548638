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

    // to open filter input
      $(function(){
      $.noConflict();

      $('#OrderTable').DataTable();



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







