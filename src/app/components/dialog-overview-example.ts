import {Component, Inject,Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: '../views/dialog-overview-example.html',
  styleUrls: ['../css/dialog-overview-example.css'],
})
export class DialogOverviewExample {
@Input() valor:any;
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {
    
  }

  openDialog(): void {

    console.log('El valor del elemento')
      console.log(this.valor)
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '600px',
      // backdropClass: 'cdk-overlay-dark-backdrop1',
      data: { name: this.name, animal: this.animal },
      disableClose:true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: '../views/dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */