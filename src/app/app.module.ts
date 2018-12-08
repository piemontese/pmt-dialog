import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { CdkTableModule } from '@angular/cdk/table';
// tslint:disable-next-line:max-line-length
// import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatTableModule  } from '@angular/material';
// import { MatDialogModule  } from '@angular/material';

// import 'hammerjs';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { PmtDialogModule } from 'projects/pmt-dialog/src/lib/pmt-dialog.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
//    CdkTableModule,
//    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatTableModule,
//    MatDialogModule,
//    FlexLayoutModule,
    PmtDialogModule
  ],
  providers: [
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
