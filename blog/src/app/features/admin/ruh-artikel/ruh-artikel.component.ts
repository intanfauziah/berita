import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ruh-artikel',
  templateUrl: './ruh-artikel.component.html',
  styleUrls: ['./ruh-artikel.component.css']
})
export class RuhArtikelComponent implements OnInit {
  ruhForm = new FormGroup({
    judul: new FormControl({ value: '', disabled: false },Validators.compose([Validators.required, Validators.maxLength(50)])),
    kategori: new FormControl({ value: '', disabled: false }, Validators.required),
    isi: new FormControl({ value: '', disabled: false }, Validators.required),
  });

  mainParsedData: any;
  param = new Map();

  constructor() { this.mainParsedData = window.history.state; }

  ngOnInit(): void {
    this.param = this.mainParsedData.data;
    console.log(this.param)
  }

  simpan(){

  }

  batal(){
    
  }

}
