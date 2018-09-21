import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsaService } from './usa.service';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.scss'],
	providers: [UsaService]
})
export class UsaComponent implements OnInit {

	animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

	public socialdata: Observable<any[]>;

  constructor(
		private _social: UsaService
	) { }

  ngOnInit() {
		this._social.getSocial({
      module : 'us',
      method : 'get',
      params: {}
    }).subscribe(socialdata => {
			this.socialdata = socialdata;
		});
  }

}
