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
  cariJudul: any;
  jenisFilter = [
    {
        name: 'Kategori', 
        code: 'kategori',
        items: [
            {itemName: '1', code: 'KAT-1'},
            {itemName: '2', code: 'KAT-2'},
            {itemName: '3', code: 'KAT-3'},
        ]
    },
    {
        name: 'Tgl Post', 
        code: 'tglPost',
        items: [
            {itemName: 'Hari Ini', code: 'TGL-hariIni'},
            {itemName: 'Bulan Ini', code: 'TGL-bulanIni'},
            {itemName: 'Tahun Ini', code: 'TGL-tahunIni'},
        ]
    }];
    selectedFilter: any;
    ketFilter: any;

  constructor() { }

  ngOnInit(): void {
    this.populateList('','')
  }

  populateList(kat:any, filter: any){
    this.contents  = JSON.parse(localStorage.getItem('objects') || '{}');
    if(kat){
      if(kat.includes('KAT')){
        const selectedKat = this.selectedFilter.split('-')[1]
        this.contents = this.contents.filter(data => data.kategori.includes(selectedKat))
      } else if(kat.includes('TGL')){
        const selectedTgl = this.selectedFilter.split('-')[1]
        let batasTgl = new Date()
        let tglHariIni = new Date()
        tglHariIni.setHours(23,59,59)
        if(selectedTgl == 'bulanIni'){
          var d = new Date();
          d.setFullYear(tglHariIni.getFullYear());
          d.setMonth(tglHariIni.getMonth());
          d.setDate(1);
          batasTgl = d
          batasTgl.setHours(0,0,0)
          this.contents = this.contents.filter(data => ((data.tglPost).setHours(0,0,0) >= batasTgl) && ((data.tglPost).setHours(0,0,0) <= tglHariIni))
        } else if (selectedTgl == 'tahunIni'){
          var d = new Date();
          d.setFullYear(tglHariIni.getFullYear());
          d.setMonth(0);
          d.setDate(1);
          batasTgl = d
          batasTgl.setHours(0,0,0)
          this.contents = this.contents.filter(data => ((data.tglPost).setHours(0,0,0) >= batasTgl) && ((data.tglPost).setHours(0,0,0) <= tglHariIni))
        } else if (selectedTgl == 'hariIni'){
          batasTgl = new Date()
          batasTgl.setHours(0,0,0)
          this.contents = this.contents.filter(data => (data.tglPost).setHours(0,0,0) === batasTgl)
        }
      }
    }
    if(filter){
      this.contents = this.contents.filter(data => data.judul.includes(filter.toUpperCase()))
    }
  }

  cari(){
    if(this.selectedFilter){
      this.selectedFilter = this.selectedFilter.code
    } else {
      this.selectedFilter = ''
    }
    this.populateList(this.selectedFilter,this.cariJudul)
  }

  filtering(){
    if(this.selectedFilter.code.includes('KAT')){
      this.ketFilter = `Kategori: ${this.selectedFilter.itemName}`
    } else if (this.selectedFilter.code.includes('TGL')){
      this.ketFilter = `Tgl Post: ${this.selectedFilter.itemName}`
    }
    this.selectedFilter = this.selectedFilter.code
    
    this.populateList(this.selectedFilter,'')
  }

}
