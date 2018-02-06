import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Coffee } from '../../logic/Coffee';
import { ListDataService } from '../../services/list-data.service';
import { GoogleNewsService } from '../../services/google-news.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  title: string
  list: [Coffee]

  constructor(private chartData: ListDataService,
    private news: GoogleNewsService, private router: Router) {
    this.title = "List Comp";
  }

  ngOnInit() {
    // get Coffee List Data from BE server
    this.chartData.getList( dataList => {
      this.list = dataList;
    });

    // this.news.sendFetch();
  }

  onGoDetials(coffee: Coffee){ // Go other URL using Router
    this.router.navigate(['/coffee', coffee._id])
  }

}
