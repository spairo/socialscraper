import { Component, OnInit } from "@angular/core";
import { ANIMATE_ON_ROUTE_ENTER } from "@app/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
	animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

	public selected: string = "option2";
	public states = [
		{ link: "none", label: "Dashboard" },
		{ link: "mx", label: "Mexico" },
		{ link: "es", label: "España" },
		{ link: "usa", label: "Estados Unidos" }
	];

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit() {}

	gotoLang(prefix){
		//TODO We need to refactor ASAP
		debugger;
		if(prefix.value === 'mx'){
			window.location.href = "http://localhost:4200/#/mexico";
		}else if(prefix.value === 'es'){
			window.location.href = "http://localhost:4200/#/spain";
		}else if(prefix.value === 'us'){
			window.location.href = "http://localhost:4200/#/usa";
		}else{
			window.location.href = "http://localhost:4200/#/";
		}

	}
}
