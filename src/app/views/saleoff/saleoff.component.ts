import { Component, OnInit } from '@angular/core';
import { SaleService } from './sale.service';

@Component({
  selector: 'app-saleoff',
  templateUrl: './saleoff.component.html',
  styleUrls: ['./saleoff.component.css']
})
export class SaleoffComponent implements OnInit {

  // list: any = [
  //   {
  //     "id": "1",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "2",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "3",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "4",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "5",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "6",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "7",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "8",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "9",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "10",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "11",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "12",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "13",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "14",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "15",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "16",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "17",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "18",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "19",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "20",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "21",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "22",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "23",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "24",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "25",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "26",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "27",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "28",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "29",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "30",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "31",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "32",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "33",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "34",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "35",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "36",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "37",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "38",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "39",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "40",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "41",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "42",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "43",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "44",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "45",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "46",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "47",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "48",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "49",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "50",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "51",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "52",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "53",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "54",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "55",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "56",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "57",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "58",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "59",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  //   {
  //     "id": "60",
  //     "images": "../../../assets/img/brand/hachinet.png",
  //     "name": "[MIỀN BẮC] Ơ MÂY ZING GÚT CHÓP ĂN LẨU GIÁ CỰC HOT",
  //     "new": true,
  //     "hot": true,
  //     "scores": 19,
  //     "status": true
  //   },
  // ]

  listItem: any;
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];

  constructor(private saleservice: SaleService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.saleservice.getAll()
      .subscribe(
        response => {
          this.listItem = response;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  onTableDataChange(event){
    this.page = event;
    this.fetchPosts();
  }

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
}
