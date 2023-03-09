import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
  contents: any[] = []
  content: any;
  mainParsedData: any;
  param: any;
  routing: any;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
  ) { this.mainParsedData = window.history.state; }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.routing = + (params.get('id') || '')
    })

    this.param = this.mainParsedData.data;
    let selectedData = this.param.get('selectedData')
    this.populateList(selectedData.id)
  }

  populateList(filter: any){
    this.contents  = JSON.parse(localStorage.getItem('objects') || '{}');
    if(filter){
      this.content = this.contents.filter(data => data.id == filter)
      console.log(this.content)
    }
  }

}
