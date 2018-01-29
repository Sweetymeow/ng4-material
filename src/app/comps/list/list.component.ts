import { Component, OnInit } from '@angular/core';
import { Coffee } from '../../logic/Coffee';
import { ChartDataService } from '../../services/chart-data.service';
import { GoogleNewsService } from '../../services/google-news.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: [Coffee]

  constructor(private chartData: ChartDataService, private news: GoogleNewsService) { }

  ngOnInit() {
    this.chartData.getList( dataList => {
      this.list = dataList;
    });

    this.news.sendFetch();
  }

}
