import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-icon-details',
  templateUrl: './icon-details.component.html',
  styleUrls: ['./icon-details.component.css']
})
export class IconDetailsComponent implements OnInit {

  @Input() source:string;
  @Input() label:string;
  @Input() link:string;
  constructor(
  ) { }

  ngOnInit(): void {

      

  }

}
