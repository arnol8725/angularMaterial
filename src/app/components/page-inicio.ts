//import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { servicesContactos } from '../services/servicesContactos';
import { contacto } from '../model/contacto';
import {MatTableDataSource} from '@angular/material';
import {carga} from '../components/carga';

import {Component, Inject,Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
declare var jquery:any;
declare var $ :any;


/** @title Basic datepicker */
@Component({
  selector: 'page-inicio',
  templateUrl: '../views/page-inicio.html',
  styleUrls: ['../css/table-filtering-example.css'],
  providers: [servicesContactos]
})
export class PageInicio {

public contacto : contacto[];
public result : any;
public dialogRef : any;
		constructor( private _servicesContactos: servicesContactos ,public dialog: MatDialog){
			
			//this.valor

				//this.getContactos();

				//this.getAddContactos();

		}


  openDialog(): void {

    console.log('El valor del elemento')
    //$('.mat-dialog-container').css({'display': 'block','padding': '24px','border-radius':'2px','box-sizing':'border-box','overflow':'auto','outline':'0','width':'100%','height':'100%','min-height':'inherit','max-height':'inherit'});
    //$('.cdk-overlay-dark-backdrop').removeProp("background");
  // 	$('.cdk-overlay-dark-backdrop').css({'background': 'rgba(255,255,255,1)'});  
   	console.log('Termino de cargar los valores del estilo') 

   /*	$(".mat-dialog-container").removeClass( ".mat-dialog-container" ).addClass( ".mat-dialog-container2" );
	$(".cdk-overlay-dark-backdrop").removeClass( ".cdk-overlay-dark-backdrop" ).addClass( ".cdk-overlay-dark-backdrop2" ); 
   */
    
   
    this.dialogRef = this.dialog.open(carga, {
      backdropClass: 'cdk-overlay-dark-backdrop2',
      panelClass : 'mat-dialog-container2',  
      width: '600px',      
      data: { color : 'warn', mode : 'indeterminate', value : 60, mensaje : 'Consultando información del cliente'},    
      disableClose:true
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //var animal = result;
     /* $('.cdk-overlay-dark-backdrop').css({'background': 'rgba(0,0,0,.288)'});
	  $('.mat-dialog-container').css({'display': 'block','padding': '24px','border-radius':'2px','box-sizing':'border-box','overflow':'auto','outline':'0','width':'100%','height':'100%','min-height':'inherit','max-height':'inherit','box-shadow':'0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)'});*/
    });
  }





	ngOnInit(){

		

		this.getContactos();

	//	this.getAddContactos();
	}

	getContactos(){
		// $(".mat-dialog-container").removeClass( ".mat-dialog-container" );
		this.openDialog();
		var self= this;

		this._servicesContactos.getConsultaContactos(1).subscribe(
			result => {

				console.log(result)				
				this.result= result;
				self.dataSource = new MatTableDataSource(this.result);				
				
				self.dialogRef.close();
				
			},
			error => {
				console.log(<any>error);
			}
		);


	}
	getAddContactos(){
		var self= this;

		this._servicesContactos.getAddContactos().subscribe(
			result => {

				console.log(result)				
				this.result= result;
				self.dataSource = new MatTableDataSource(this.result);

			},
			error => {
				console.log(<any>error);
			}
		);


	}



	displayedColumns = ['id','nombre', 'apellidoPat', 'apellidoMat', 'celular','telefono','email','Boton'];
    dataSource = new MatTableDataSource(this.result);

  applyFilter(filterValue: string) {
  	console.log('valor del filtro'+filterValue);
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    console.log('valor del filtro with trim'+ filterValue);
    this.dataSource.filter = filterValue;
  }


}
