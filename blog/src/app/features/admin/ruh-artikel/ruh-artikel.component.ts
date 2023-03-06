import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-ruh-artikel',
  templateUrl: './ruh-artikel.component.html',
  styleUrls: ['./ruh-artikel.component.css'],
  providers: [ConfirmationService]
})
export class RuhArtikelComponent implements OnInit {
  ruhForm = new FormGroup({
    judul: new FormControl({ value: '', disabled: false },Validators.compose([Validators.required, Validators.maxLength(50)])),
    kategori: new FormControl({ value: '', disabled: false }, Validators.required),
    isi: new FormControl({ value: '', disabled: false }, Validators.required),
  });

  mainParsedData: any;
  param = new Map();
  judul: string = '';
  kategori: string = '';
  isi: string = '';
  arrObj : any[] = [];

  constructor(
    private confirmationService: ConfirmationService,
    public router: Router,
    public activeRoute: ActivatedRoute,
  ) { this.mainParsedData = window.history.state; }

  ngOnInit(): void {
    this.param = this.mainParsedData.data;
    console.log(this.param)
    console.log(this.param.get('mode'))
    if (this.param.get('mode') == 'edit'){
      let selectedData = this.param.get('selectedData')
      this.ruhForm.patchValue({
        judul: selectedData.judul,
        kategori: selectedData.kategori,
        isi: selectedData.isi
      });
    }
  }

  simpan(){
    // this.confirmationService.confirm({
    //   key: 'main-confirm-dialog',
    //   header: 'Konfirmasi',
    //   message: 'Simpan data?',
    //   accept: () => {
        this.arrObj.push(this.ruhForm.value)
        let objects = JSON.stringify(this.arrObj);
        
        localStorage.setItem('objects', objects);

        let retrievedObject = localStorage.getItem('objects');
        this.arrObj = JSON.parse(retrievedObject || '{}')

        this.navigateTo('admin/ruh', {})
    //   },
    //   reject: () => { }
    // });
    
    

    
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

  navigateTo(url: string, data: any) {
    this.router.navigateByUrl(url, { state: { data } });
  }

}
