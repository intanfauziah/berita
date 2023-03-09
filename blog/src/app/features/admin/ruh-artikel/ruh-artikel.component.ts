import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {ConfirmationService, MessageService} from 'primeng/api';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-ruh-artikel',
  templateUrl: './ruh-artikel.component.html',
  styleUrls: ['./ruh-artikel.component.css'],
  providers: [ConfirmationService, MessageService, HttpClient]
})
export class RuhArtikelComponent implements OnInit {
  ruhForm = new FormGroup({
    id: new FormControl({ value: '', disabled: false }, Validators.required),
    judul: new FormControl({ value: '', disabled: false },Validators.compose([Validators.required, Validators.maxLength(50)])),
    kategori: new FormControl({ value: '', disabled: false }, Validators.required),
    isi: new FormControl({ value: '', disabled: false }, Validators.required),
    gambar: new FormControl({ value: '', disabled: false }),
    tglPost: new FormControl({ value: new Date(), disabled: false }, Validators.required),
  });

  jenisKategori = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
  ];

  mainParsedData: any;
  param = new Map();
  judul: string = '';
  kategori: string = '';
  isi: string = '';
  arrObj : any[] = [];
  visibleSimpan = true;
  visibleBatal = true;
  uploadedFiles: any[] = []

  constructor(
    private confirmationService: ConfirmationService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    private messageService: MessageService,
  ) { this.mainParsedData = window.history.state; }

  ngOnInit(): void {
    this.param = this.mainParsedData.data;
    if (this.param.get('mode') == 'edit' || this.param.get('mode') == 'lihat'){
      let selectedData = this.param.get('selectedData')
      this.ruhForm.patchValue({
        judul: selectedData.judul,
        kategori: selectedData.kategori,
        isi: selectedData.isi
      });
    }
    this.visibleSimpan = true;
    this.visibleBatal = true;
    if(this.param.get('mode') == 'lihat'){
      this.ruhForm.disable()
      this.visibleSimpan = false;
      this.visibleBatal = false;
    }
  }

  simpan(){
    console.log(this.ruhForm.value)
    this.confirmationService.confirm({
      key: 'main-confirm-dialog',
      header: 'Konfirmasi',
      message: 'Simpan data?',
      accept: () => {
        if(this.param.get('selectedData')){
          let datas = JSON.parse(localStorage.getItem('objects') || '{}')
          for (let i =0; i< datas.length; i++) {
            let data = datas[i];
            if (data.judul == this.param.get('selectedData').judul) {
                datas.splice(i, 1);
            }
          }
          datas = JSON.stringify(datas)
          localStorage.setItem("objects", datas)
        }

        this.arrObj = JSON.parse(localStorage.getItem('objects') || '{}')
        const tanggal = new Date()
        tanggal.setHours(0,0,0)
        this.ruhForm.patchValue({
          id : this.randomString(5),
          tglPost: tanggal
        })
        this.arrObj.push(this.ruhForm.value)
        let objects = JSON.stringify(this.arrObj);
        if(this.ruhForm.valid){
          localStorage.setItem('objects', objects);
          console.log('60',this.arrObj)
          this.messageService.add({
            key: 'main-toast',
            summary: 'Success',
            severity: 'success',
            detail: "Data Berhasil Disimpan"
          });
          setTimeout(() => {
            this.navigateTo('admin', {})
          }, 1000);
          
        } else {
          this.messageService.add({
            key: 'main-toast',
            summary: 'Error',
            severity: 'error',
            detail: "Form Belum Sesuai"
          });
        }
        
      },
      reject: () => { }
    });
    
    

    
  }

  batal(){
    if (this.param.get('mode') == 'edit'){
      let selectedData = this.param.get('selectedData')
      this.ruhForm.patchValue({
        judul: selectedData.judul,
        kategori: selectedData.kategori,
        isi: selectedData.isi
      });
    } else {
      this.ruhForm.patchValue({
        judul: '',
        kategori: '',
        isi: ''
      });
    }
  }

  keluar(){
    this.navigateTo('admin', {})
  }

  navigateTo(url: string, data: any) {
    this.router.navigateByUrl(url, { state: { data } });
  }

  randomString(length: number) {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for ( let i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    if (this.param.get('mode') == 'edit'){
      result = this.param.get('selectedData').id
    }
    return result;
  }

  onUpload(event:any) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }
      console.log('this.uploadedFiles',this.uploadedFiles)

      this.messageService.add({
        key: 'main-toast',
        severity: 'info', 
        summary: 'File Uploaded', 
        detail: ''
      });
  }
  

}
