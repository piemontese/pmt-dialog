import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { Button } from '../interfaces/button';

/*
interface Button {
  caption: string;
  color: string;
  close: boolean;
}
*/

@Component({
  selector: 'lib-pmt-dialog',
  templateUrl: './pmt-dialog.component.html',
  styleUrls: ['./pmt-dialog.component.scss']
})
export class PmtDialogComponent implements OnInit {
  public caller;
  public dialogType: String = 'message';  // message, confirm, choise
  public title: String = '';
  public messages: Array<String> = [];
  public messageType = 'info';
  public buttons: Button[];
  public routeTo: String = '';
  public response: String = '';
  public callback: Function = null;

  constructor( public messageBox: MatDialogRef<PmtDialogComponent> ) { }

  onClick( response: string ) {
    this.response = response;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if ( this.callback ) {
      this.callback(this.caller, this.response);
    }
  }

}

