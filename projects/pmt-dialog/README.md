# PmtDialog

Dialog box for angular-cli developed with Angular Material

## Getting Started
Install packege
```
npm install --save pmt-dialog
```

Upgrade package
```
npm uninstall --save pmt-dialog
npm install --save pmt-dialog
```

In your app.module.ts, insert code:
```
...
import { PmtDialogModule } from 'pmt-dialog';
...
@NgModule({
  imports: [
    ...
    PmtDialogModule
  ],
  ...
})
```

## Use package
```
import { PmtDialogService } from 'pmt-dialog';
...
  constructor( public pmtDialogService: PmtDialogService ) {
    this.pmtDialogService.open( 'Sample PmtDialog',   // title
                                ['This is an example of PmtDialog'],  // array of messages
                                'message',   // dialog type
                                'error',   // message type
                                [
                                  {caption: 'Close', color: 'primary', close: true},
                                  //                           { caption: "Cancel", color: "warn", close: true }
                                ]  // buttons
                              );
  }
```


## Customize dialog color
In you style.scss, add code:
```
.pmt-dialog-container { 
  mat-dialog-container {
    background-color: #ddffdd !important;
  }
}
```

