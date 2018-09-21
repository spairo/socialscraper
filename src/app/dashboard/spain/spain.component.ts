import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpainService } from './spain.service';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'app-spain',
  templateUrl: './spain.component.html',
	styleUrls: ['./spain.component.scss'],
	providers: [SpainService]
})
export class SpainComponent implements OnInit {

	animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

	public socialdata: Observable<any[]>;

  constructor(
		private _social: SpainService
	) { }

  ngOnInit() {
		this._social.getSocial({
      module : 'es',
      method : 'get',
      params: {}
    }).subscribe(socialdata => {
			this.socialdata = socialdata;
		});
  }

}
