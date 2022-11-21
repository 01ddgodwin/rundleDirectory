import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChild('logo') logo!: ElementRef;
  logoFile: any

  @ViewChild('primaryColor') primaryColor!: ElementRef;
  primaryColorCode: any;

  @ViewChild('secondColor') secondColor!: ElementRef;
  secondColorCode: any;

  @ViewChild('thirdColor') thirdColor!: ElementRef;
  thirdColorCode: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.logo)
    console.log(this.primaryColor)
    console.log(this.secondColor)
    console.log(this.thirdColor)
  }

  saveStyles() {
    this.logoFile = this.logo.nativeElement.value;
    this.primaryColorCode = this.primaryColor.nativeElement.value;
    this.secondColorCode = this.secondColor.nativeElement.value;
    this.thirdColorCode = this.thirdColor.nativeElement.value
    
  }

}
