import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  readMore = false;
  contents: any[] = []
  judul: any;
  isi: any;
  constructor() { }

  ngOnInit(): void {
    this.populateList()
  }

  populateList(){
    this.contents  = JSON.parse(localStorage.getItem('objects') || '{}');
    console.log('contents',this.contents)
    // for(let i=0;i<this.contents.length;i++){
    //   this.judul = this.contents[i].judul
    //   this.isi = this.contents[i].isi
    // }
    
  }
}
