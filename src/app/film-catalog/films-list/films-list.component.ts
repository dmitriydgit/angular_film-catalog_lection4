import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../../film';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
	selector: 'app-films-list',
	templateUrl: './films-list.component.html',
	styleUrls: ['./films-list.component.css'],

	//providers: [FilmService]
})
export class FilmsListComponent implements OnInit {
	selected: string;
	films: Film[];
	favCount: number;
	searchArray: Film[];

	constructor(public filmsService: FilmService) { }

	ngOnInit() {
		this.getAllFIlms();
		this.setFavFilms(event);
		// console.log(this.items);
	}

	getAllFIlms() {
		this.films = this.filmsService.getData();
		this.searchArray = this.films;
	}
	setFavFilms(e) {
		console.log(e);
		this.favCount = this.searchArray.filter(el => el.isFavorite).length;
	}

	sortItems(direct) {
		return this.films.sort((a, b) => {
			let x = a.name.toLowerCase();
			let y = b.name.toLowerCase();
			if (x < y) { return -1 * direct; }
			if (x > y) { return 1 * direct; }
			return 0;
		})

	}


}
