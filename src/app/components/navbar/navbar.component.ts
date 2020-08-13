import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentLang: string;
  currentDirection: string;
  textAlign: string;

  constructor(public translate: TranslateService) {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.currentDirection = localStorage.getItem('currentDirection') || 'ltr';
    this.textAlign = localStorage.getItem('textAlign') || 'left';

    this.translate.use(this.currentLang);
    document.body.setAttribute('style', 'direction: ' + this.currentDirection + ';text-align: ' + this.textAlign);
  }

  changeCurrentLang(lang: string) {

    if (lang === 'en') {
      this.currentDirection = 'ltr';
      this.textAlign = 'left';
    } else if (lang === 'ar') {
      this.currentDirection = 'rtl';
      this.textAlign = 'right';
    }

    localStorage.setItem('currentLang', lang);
    localStorage.setItem('currentDirection', this.currentDirection);
    localStorage.setItem('textAlign', this.textAlign);

    this.translate.use(lang);
    document.body.setAttribute('style', 'direction: ' + this.currentDirection + ';text-align: ' + this.textAlign);
  }

  ngOnInit(): void {
  }

}
