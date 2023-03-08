import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class AdminPageComponent implements OnInit {
  dataLists: any = []
  selectedData: any;
  columns = [
    { field: 'judul', header: 'Judul', width:'60%' },
    { field: 'kategori', header: 'Kategori', width:'20%' },
    { field: 'tglPost', header: 'Tanggal Post', width:'20%' , format: 'tanggal', style: {'text-align': 'center'}},
  ];

  constructor(  public router: Router,
                public activeRoute: ActivatedRoute,
                private messageService: MessageService,
                private confirmationService: ConfirmationService
              ) { }

  ngOnInit(): void {
    this.populateList()
  }

  populateList(){
    let retrievedObject = localStorage.getItem('objects') || '{}';
    this.dataLists = JSON.parse(retrievedObject)
  }

  lihat(){
    if(!this.selectedData){
      this.messageService.add({
        key: 'main-toast',
        summary: 'Warning',
        severity: 'error',
        detail: "Pilih Data Terlebih Dahulu"
      });
      return
    }
    console.log(this.selectedData)
    const formParams = new Map();
    formParams.set('mode', 'lihat')
    formParams.set('selectedData', this.selectedData)
    this.navigateTo('admin/ruh', formParams);
  }

  rekam(){
    const formParams = new Map();
    formParams.set('mode', 'rekam')
    this.navigateTo('admin/ruh', formParams);
  }

  ubah(event:any){
    if(!this.selectedData){
      this.messageService.add({
        key: 'main-toast',
        summary: 'Warning',
        severity: 'error',
        detail: "Pilih Data Terlebih Dahulu"
      });
      return
    }
    console.log(this.selectedData)
    const formParams = new Map();
    formParams.set('mode', 'edit')
    formParams.set('selectedData', this.selectedData)
    this.navigateTo('admin/ruh', formParams);
  }

  hapus(){
    if(!this.selectedData){
      this.messageService.add({
        key: 'main-toast',
        summary: 'Warning',
        severity: 'error',
        detail: "Pilih Data Terlebih Dahulu"
      });
      return
    }
    console.log(this.selectedData)
    
    this.confirmationService.confirm({
      key: 'main-confirm-dialog',
      header: 'Konfirmasi',
      message: 'Hapus data?',
      accept: () => {
        let datas = JSON.parse(localStorage.getItem('objects') || '{}')
        for (let i =0; i< datas.length; i++) {
          let data = datas[i];
          if (data.judul == this.selectedData.judul) {
              datas.splice(i, 1);
          }
       } 
        datas = JSON.stringify(datas)
        localStorage.setItem("objects", datas)
        this.messageService.add({
          key: 'main-toast',
          summary: 'Success',
          severity: 'success',
          detail: "Data Berhasil Dihapus"
        });
        this.populateList()
      },
      reject: () => { }
    });
  }

  navigateTo(url: string, data: any) {
    this.router.navigateByUrl(url, { state: { data } });
  }

}
