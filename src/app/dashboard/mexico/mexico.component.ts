import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MexicoService } from './mexico.service';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'app-mexico',
  templateUrl: './mexico.component.html',
	styleUrls: ['./mexico.component.scss'],
	providers: [MexicoService]
})
export class MexicoComponent implements OnInit {

	animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

	public socialdata: Observable<any[]>;
	public metadata: any;
  constructor(
		private _social: MexicoService
	) { }

  ngOnInit() {
		this._social.getSocial({
      module : 'mx',
      method : 'get',
      params: {}
    }).subscribe(socialdata => {
			this.metadata = socialdata;
			console.log(this.metadata);
		});
	}

}
