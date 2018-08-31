

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
/*import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
*/


import { GLOBAL } from './global';
//import { map } from "rxjs/internals/operators/map";

//import "rxjs/add/observable/concat";
//import "rxjs/add/operator/map";
//import "rxjs/add/operator/take";

@Injectable()
export class  servicesContactos   {
	public url: string;
	constructor(public _http: HttpClient) {

			this.url = GLOBAL.url;	
	}

	getConsultaContactos(id: number){
		
		console.log('Entro en el metodo de servicio getConsultaContactos')
		
		
		/*Example de parametros a enviar a petision post*/
		let solicitud:any = {};
		/*let solicitud:any = {};
		solicitud.Empleado=datosGenerales.NoEmpleado;
        solicitud.NoCuenta=egreso.noCuenta;
        solicitud.ImporteGasto=egreso.importe;
        solicitud.ImporteImpuesto=egreso.importeImpuesto;
        console.log('Valor del´parametro fiActivaXML');
        console.log(datosGenerales.fiActivaXML);
        solicitud.Valxml= datosGenerales.fiActivaXML;
        solicitud.Referencia=egreso.factura;
        solicitud.Observaciones='';
        solicitud.Justificacion=egreso.justificacion;
        solicitud.FolioRefFletes='';
        solicitud.Cifracontrol='';
        solicitud.PresupuestoDisponible=datos.Disponible;
        solicitud.estacioTrabajo=datosGenerales.estacion;*/

        

       /* let flete:any = {};
        	flete.Datosparam=0; 
        solicitud.Datosfiscales=flete;
        console.log('Valores de solicitud');
        console.log(solicitud);
        */

        const httpOptions = {
		  headers: new HttpHeaders({
		    'Content-Type':  'application/json',
		    'Authorization': 'my-auth-token'
		  })
		};


		//let headers = new Headers({ 'Content-Type': 'application/json' });
		//let options = new RequestOptions({ headers: httpOptions.headers });

 return this._http.get<any[]>(this.url+'contactosAgenda').pipe(map(data => data));


  }

  getAddContactos(){
		
		console.log('Entro en el metodo de servicio getConsultaContactos')
		
		
		/*Example de parametros a enviar a petision post*/
		let solicitud:any = {};
		solicitud.nombre="Arnulfo prueba 2";
		solicitud.apellidoPat="Peralta";
		solicitud.apellidoMat="Perez";		
		solicitud.telefono="5557328737";
		solicitud.celular="0445550687833";
		solicitud.email="arnulfo_pp@hotmail.com";
		//solicitud.id:1
		
		
		/*let solicitud:any = {};
		solicitud.Empleado=datosGenerales.NoEmpleado;
        solicitud.NoCuenta=egreso.noCuenta;
        solicitud.ImporteGasto=egreso.importe;
        solicitud.ImporteImpuesto=egreso.importeImpuesto;
        console.log('Valor del´parametro fiActivaXML');
        console.log(datosGenerales.fiActivaXML);
        solicitud.Valxml= datosGenerales.fiActivaXML;
        solicitud.Referencia=egreso.factura;
        solicitud.Observaciones='';
        solicitud.Justificacion=egreso.justificacion;
        solicitud.FolioRefFletes='';
        solicitud.Cifracontrol='';
        solicitud.PresupuestoDisponible=datos.Disponible;
        solicitud.estacioTrabajo=datosGenerales.estacion;*/

        

       /* let flete:any = {};
        	flete.Datosparam=0; 
        solicitud.Datosfiscales=flete;
        console.log('Valores de solicitud');
        console.log(solicitud);
        */

        const httpOptions = {
		  headers: new HttpHeaders({
		    'Content-Type':  'application/json',
		    'Authorization': 'my-auth-token'
		  })
		};
		console.log('Valores a enviar de agenda');
		console.log(solicitud);

		//let headers = new Headers({ 'Content-Type': 'application/json' });
		//let options = new RequestOptions({ headers: httpOptions.headers });

 return this._http.post<any[]>(this.url+'addAgenda',solicitud).pipe(map(data => data));


  }
		

		//return this._http.post(this.url+'contactosAgenda',solicitud).map(res => res.json());	     
	


}