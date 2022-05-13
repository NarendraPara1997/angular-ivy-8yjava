import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css']
})
export class TaskTwoComponent implements OnInit {
  prodectList: any;
  objExp: any = 'col-3';
  constructor() {}
  display(i) {
    return new Array(i);
  }
  fourDisplay() {
    this.objExp = 'col-3';
  }
  twoDisplay() {
    this.objExp = 'col-6';
  }
  ngOnInit() {
    this.display('');
  }

}