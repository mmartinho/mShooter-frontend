import { Component, OnInit } from '@angular/core';
import { FilterMatchMode, PrimeNGConfig } from  'primeng/api';

import { LanguagePt } from './libs/primeng/translations/language-pt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mShooter';

  constructor(
    private primengCnf: PrimeNGConfig,
    private languagePt: LanguagePt
  ) {}

  ngOnInit(): void {
    /** 
     * Ripple is an optional animation for the supported components such as buttons. 
     * It is disabled by default and needs to be enabled globally by injecting 
     */
    this.primengCnf.ripple = true;

    /**
     * ZIndexes are managed automatically to make sure layering of overlay components 
     * work seamlessly when combining multiple components. 
     */
    this.primengCnf.zIndex = {
      /** Dialog, sidebar */
      modal: 100,
      /** Dropdown, overlaypanel */
      overlay: 1000,
      /** Overlay menu */
      menu: 1000,
      /** Over all others: tooltip */
      tooltip: 1100
    };

    /**
     * Default filter modes to display on DataTable filter menus
     */
    this.primengCnf.filterMatchModeOptions = {
      text: [
        FilterMatchMode.STARTS_WITH, 
        FilterMatchMode.CONTAINS, 
        FilterMatchMode.NOT_CONTAINS, 
        FilterMatchMode.ENDS_WITH, 
        FilterMatchMode.EQUALS, 
        FilterMatchMode.NOT_EQUALS
      ],
      numeric: [
        FilterMatchMode.EQUALS, 
        FilterMatchMode.NOT_EQUALS, 
        FilterMatchMode.LESS_THAN, 
        FilterMatchMode.LESS_THAN_OR_EQUAL_TO, 
        FilterMatchMode.GREATER_THAN, 
        FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
      ],
      date: [
        FilterMatchMode.DATE_IS, 
        FilterMatchMode.DATE_IS_NOT, 
        FilterMatchMode.DATE_BEFORE, 
        FilterMatchMode.DATE_AFTER
      ]
    };

    /** 
     * Set Portuguese json translation file
     * @see src\app\libs\primeng\translations\pt.json
     */
    this.languagePt.translation().subscribe(lang => {
      this.primengCnf.setTranslation(lang);
    });
  }
}
