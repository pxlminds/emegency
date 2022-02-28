import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders,   HttpParams, HttpParamsOptions  } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 deviceDataSet : any = {data: []};
  constructor(private http:HttpClient, private router: Router) { }
  ngOnInit(): void {
  this.loadDevice();
  }
  DeleteSuccess() {
      Swal.fire({
        icon: 'success',
        title: 'Successfully Deleted!',         
      })
  }
  DeleteError() {
      Swal.fire({
        title: 'Device Not found',         
        icon: 'error'
      })
  }

/*Device Load*/
 loadDevice(){
      let token =localStorage.getItem("token");
      const headers = { 
      'Authorization': 'Bearer '+token,
       'Content-Type': 'application/json' ,
       'Access-Control-Allow-Origin':'*'
  };
  const params = { pageNumber:1, pageSize:10 };
   this.http.post(`${environment.apiUrl}/device/list`, params, {headers: headers}  )
      .subscribe( result => {this.deviceDataSet = result; },
          error => { console.log(error) },
          () => {            
          }
        ); 
  }
  /*Delete Function*/
  deleteDevice(device) {    
    let token =localStorage.getItem("token");
    console.log('device id', device)
      const headers = { 
      'Authorization': 'Bearer '+token,
       'Content-Type': 'application/json' ,
       'Access-Control-Allow-Origin':'*'
     };
    const params = {};  
    let url = environment.apiUrl + '/device/delete/' + device.ID
    this.http.get(url, {headers: headers}  )
      .subscribe( result => {        
       this.loadDevice();
       this.DeleteSuccess();//alert
        },
          error => { 
            this.DeleteError();//alert
            console.log(error) },
          () => {            
          }
        ); 
    }
    //Edit Device
    editDevice(device){
      console.log('Edit device id', device)
      this.router.navigateByUrl('/add-device', { state: { hello: 'world' } });
     
    }
}


interface Sidebar {
    _id: string;
    content: string;
}