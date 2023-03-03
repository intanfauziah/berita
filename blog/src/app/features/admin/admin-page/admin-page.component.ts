import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  dataLists: any = []
  private artikel = [
                      {'judul':'1', 'kategori':'A','isi':'First Artikel'},
                      {'judul':'2', 'kategori':'A','isi':'Second Artikel'},
                    ];

  columns = [
    { field: 'judul', header: 'Judul', width:'50%' },
    { field: 'kategori', header: 'Kategori', width:'50%' },
  ];

  constructor(  public router: Router,
                public activeRoute: ActivatedRoute,
              ) { }

  ngOnInit(): void {
    console.log('admin')
    this.populateList()
    console.log(this.columns)
  }

  populateList(){
    console.log(this.artikel)
    for(let art in this.artikel){
      this.dataLists.push(this.artikel[art])
      console.log(this.artikel[art])
    }
  }

  rekam(){
    const formParams = new Map();
    formParams.set('mode', 'rekam')
    this.navigateTo('admin/ruh', formParams);
  }

  ubah(){
    const formParams = new Map();
    formParams.set('mode', 'edit')
    this.navigateTo('admin/ruh', formParams);
  }

  hapus(){

  }

  navigateTo(url: string, data: any) {
    this.router.navigateByUrl(url, { state: { data } });
  }

}
