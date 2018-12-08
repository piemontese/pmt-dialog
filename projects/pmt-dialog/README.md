# PmtDialog

Dialog box for angular-cli developed with Angular and Angular-Material

## Getting Started
### Install package
```
npm install --save pmt-dialog
```

### Upgrade package
```
npm uninstall --save pmt-dialog
npm install --save pmt-dialog
```

In your app.module.ts, insert code:
``` typescript
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

In component typescript source
``` typescript
import { PmtDialogService } from 'pmt-dialog';
...
  constructor( public pmtDialogService: PmtDialogService ) {
    // Enter the following code where you want to call PmtDialog
    this.pmtDialogService.open( 
        'Sample PmtDialog',     // title
        ['This is an example of PmtDialog'],    // array of messages
        'message',    // dialog type
        'error',    // message type (info, error, warning)  
        [
          { caption: 'Close', color: 'primary', close: true },
          { caption: "Cancel", color: "warn", close: true }
        ],     // Buttons
        callback,   // callback function (optional)
        this    // caller (optional)
     );
  }
```


## Customize dialog color
In you style.scss, add code:
``` scss
.pmt-dialog-container { 
  mat-dialog-container {
    background-color: #ddffdd !important;    // set your color
  }
}
```

