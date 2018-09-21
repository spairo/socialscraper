import { Component, OnInit } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

	public selected: string = 'option2';

  constructor() { }

  ngOnInit() {
	}

	console.log(selected);


}
