import { Component, Input, OnInit } from '@angular/core';

import { localNull } from '../../../servicos/local/local-null.object';
import { Local } from '../../../servicos/local/local.interface';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {

  @Input()
  local : Local = localNull;

  constructor() { }

  ngOnInit(): void {
  }

}
