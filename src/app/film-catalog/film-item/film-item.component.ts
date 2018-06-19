import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../../film';



@Component({
	selector: 'app-film-item',
	templateUrl: './film-item.component.html',
	styleUrls: ['./film-item.component.css'],

})


export class FilmItemComponent implements OnInit {

	@Input('filmItem') film: Film;
	@Output() add = new EventEmitter();

	value: string;

	constructor() { }


	addToFavorite() {
		this.film.isFavorite = !this.film.isFavorite; //меняет на фолс/тру
		this.add.emit("hahaha"); // что за дичь?
	}

	ngOnInit() {
	}

}
