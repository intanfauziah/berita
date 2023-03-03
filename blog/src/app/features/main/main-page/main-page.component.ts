import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  readMore = false;
  artikel = [
    {
      'judul':'1', 
      'kategori':'A',
      'isi':'First Artikel First Artikel First Artikel First Artikel First Artikel First Artikel First Artikel First Artikel First Artikel First Artikel'},
    {
      'judul':'2', 
      'kategori':'A',
      'isi':'Second Artikel Second Artikel Second Artikel Second Artikel Second Artikel Second Artikel Second Artikel Second Artikel Second Artikel Second Artikel'},
  ];
  isi1 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt 
  quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  constructor() { }

  ngOnInit(): void {
    console.log('main')
  }

}
