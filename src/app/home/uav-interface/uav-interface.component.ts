import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uav-interface',
  templateUrl: './uav-interface.component.html',
  styleUrls: ['./uav-interface.component.css']
})
export class UavInterfaceComponent implements OnInit {

  @Input() station: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
