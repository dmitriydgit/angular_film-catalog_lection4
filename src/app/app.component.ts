import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	links: object[] = [
		{ path: '/main', label: 'Главная', active: 'mat-accent', icon: 'home' },
		{ path: '/films', label: 'Все фильмы', active: 'mat-accent', icon: 'list_alt' }
	];



}

