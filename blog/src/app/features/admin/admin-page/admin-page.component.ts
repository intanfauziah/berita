import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  dataLists: any = []
  selectedData: any;
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
                private messageService: MessageService
              ) { }

  ngOnInit(): void {
    this.populateList()
  }

  populateList(){
    let retrievedObject = localStorage.getItem('objects') || '{}';
    this.dataLists = JSON.parse(retrievedObject)
  }

  rekam(){
    const formParams = new Map();
    formParams.set('mode', 'rekam')
    this.navigateTo('admin/ruh', formParams);
  }

  ubah(){
    if(!this.selectedData){
      this.messageService.add({
        key: 'main-toast',
        summary: 'Warning',
        severity: 'error',
        detail: "Pilih Data Terlebih Dahulu"
      });
    }
    console.log(this.selectedData)
    const formParams = new Map();
    formParams.set('mode', 'edit')
    formParams.set('selectedData', this.selectedData)
    this.navigateTo('admin/ruh', formParams);
  }

  hapus(){
    if(!this.selectedData){
      console.log('!')
      this.messageService.add({
        key: 'main-toast',
        summary: 'Warning',
        severity: 'error',
        detail: "Pilih Data Terlebih Dahulu"
      });
    }
    console.log(this.selectedData)
    let datas = JSON.parse(localStorage.getItem('objects') || '{}')
    for (let i =0; i< datas.length; i++) {
      let data = datas[i];
      if (data.judul == this.selectedData.judul) {
          datas.splice(i, 1);
      }
  }
    datas = JSON.stringify(datas)
    localStorage.setItem("objects", datas)
    this.populateList()
  }

  navigateTo(url: string, data: any) {
    this.router.navigateByUrl(url, { state: { data } });
  }

}
