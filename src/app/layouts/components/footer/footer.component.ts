import packageInfo from '../../../../../package.json';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() type: string;
  vsn: string;
  year: string;

  constructor() {
     this.vsn = packageInfo.version;
  }

  // Obtiene el año actual
  ngOnInit() {
    this.year = new Date().getFullYear().toString();
  }
}
