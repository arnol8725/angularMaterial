import {Component, Inject,Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
/**
 * @title Configurable progress spinner
 */

@Component({
  selector: 'carga',
  templateUrl: '../views/carga.html',
  styleUrls: ['../css/carga.css'],
})
export class carga {
 color = 'Warn';
  mode = 'indeterminate';
  value = 75;
  mensaje = "Consultando información de cliente"
  constructor(
    public dialogRef: MatDialogRef<carga>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
  		console.log('Valor de data');      
  		console.log(data);
      console.log('Entro en el metodo constructor de carga');
     // $('.mat-dialog-container').css({'box-shadow': '0px'});  

  }


ngAfterContentInit(){    
    console.log('Entro en el metodo ngAfterViewInit de carga');
    //$('.mat-dialog-container').css({'box-shadow': '0px'});  
    console.log('Paso en el metodo ngAfterViewInit de carga');
  
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
