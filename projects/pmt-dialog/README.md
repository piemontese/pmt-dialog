# PmtDialog

Dialog box for angular-cli developed with Angular Material

## Getting Started
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
## Customize dialog color
In you style.scss, add code:
...
.pmt-dialog-container { 
  mat-dialog-container {
    background-color: #ddffdd !important;
  }
}
...

