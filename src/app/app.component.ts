import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Router } from '@angular/router';
import { routerTransition } from '@app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [routerTransition]
})
export class AppComponent {
	title = 'app';

	navigation = [
    { link: 'home', label: 'Home' },
    { link: 'mexico', label: 'Mexico'},
		{ link: 'spain', label: 'España'},
		{ link: 'usa', label: 'USA'}
  ];

	constructor(
    public overlayContainer: OverlayContainer,
    private router: Router,
    private titleService: Title
  ) {}
}
