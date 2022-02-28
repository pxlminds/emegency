import { Component, OnInit, Input, Output, Inject , EventEmitter} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatTableDataSource} from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'admin-paginator',
  templateUrl: './admin_paginator.component.html',
  encapsulation: ViewEncapsulation.None
})

export class AdminPaginatorComponent {  
  @Input() length : number = 0;
  @Input() pageIndex : number = 0;
  @Input() pageSize : number = 10;
  @Input() pageSizeOptions = [20];
  @Output() changePage = new EventEmitter<string>();
  onPaginateChange(event){
    this.changePage.emit(event.pageIndex);
  }
}
