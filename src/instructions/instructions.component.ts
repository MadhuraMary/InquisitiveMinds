import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {
  isChecked :boolean;
  constructor() { }

  ngOnInit() {
this.isChecked=false;
  }

}
