import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Rx';
import { Observable } from "rxjs";
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { PmtDialogComponent } from '../components/pmt-dialog.component';
import { Router } from '@angular/router';
import { Button } from '../interfaces/button';

/*
interface Button {
  caption: string;
  color: string;
  close: boolean;
}
*/

@Injectable()
export class PmtDialogService {
  dialogRef: MatDialogRef<PmtDialogComponent>;
  result: String = '';
  response: String = '';

  constructor( private router: Router, private dialog: MatDialog ) { }

//  public open( title, messages, dialogType, messageType, buttons: Button[] ): Observable<boolean>
  public open( title,
               messages,
               dialogType,
               messageType,
               buttons: Button[],
               callback: Function = null,
               routeTo: string = '',
               caller = null ) {
//    let dialogRef: MatDialogRef<PmtDialogComponent>;

    this.dialogRef = this.dialog.open(PmtDialogComponent, {
      panelClass: 'pmt-dialog-container',
//      width: '500px',
//      height: '80%',
      disableClose: true,  // modal
    });
    this.dialogRef.componentInstance.caller = caller;
    this.dialogRef.componentInstance.dialogType = dialogType;
    this.dialogRef.componentInstance.messageType = messageType;
    this.dialogRef.componentInstance.title = title;
    this.dialogRef.componentInstance.messages = messages;
    this.dialogRef.componentInstance.buttons = buttons;
    this.dialogRef.componentInstance.routeTo = routeTo;
    this.dialogRef.componentInstance.callback = callback;
    const a = 1;

//    return dialogRef.afterClosed();

    this.dialogRef.afterClosed().subscribe(result => {
      debugger;
      this.response = this.dialogRef.componentInstance.response;
      if ( routeTo !== '' ) {
        this.router.navigate([routeTo]);
      }
    });
  }

}
