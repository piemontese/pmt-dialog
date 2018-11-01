import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { PmtDialogService } from 'projects/pmt-dialog/src/lib/services/pmt-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  dialog: PmtDialogService;

  constructor( public pmtDialogService: PmtDialogService ) {
    this.dialog = pmtDialogService;
  }

  public onClick() {
    this.pmtDialogService.open( 'PmtDialog component',   // title
                                [
                                  'PmtDialog component sample',
                                  '',
                                  'Row 1',
                                  'Row 2'
                                ],  // array of messages
                                'message',   // dialog type
                                'info',   // message type
                                [
                                  {caption: 'Close', color: 'primary', close: true},
                                  //                           { caption: "Cancel", color: "warn", close: true }
                                ],  // buttons
                                this.dialogCallback,
                                '',
                                this
                              );
  }

  public dialogCallback( caller, result: string ) {
    debugger;
    if ( caller ) {
      caller.pmtDialogService.open( 'Callback',
                                    ['Callback method called'],
                                    'message',
                                    'warning',
                                    [
                                      {caption: 'OK', color: '', close: true},
                                    ],  // buttons
                                  );
    }
  }
}
