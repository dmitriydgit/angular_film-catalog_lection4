import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../../film';

@Component({
	selector: 'app-films-list',
	templateUrl: './films-list.component.html',
	styleUrls: ['./films-list.component.css'],
	encapsulation: ViewEncapsulation.None

	//providers: [FilmService]
})
export class FilmsListComponent implements OnInit {
	selected: string;
	favCount: number;
	searchArray: Film[];
	searchString: string;
	searching: boolean = false;
	direct: any = 0;
	allPages: number;
	counter = 0;
	displayedFilms: Film[] = [];
	isBorder: boolean = true;


	constructor(public filmsService: FilmService) { }

	ngOnInit() {
		this.getFIlms();
		this.setFavFilms(event);
	}

	getFIlms() {
		let responce = this.filmsService.getData();
		this.displayedFilms = [...this.displayedFilms, ...responce.data];
		this.searchArray = [...this.displayedFilms];
		this.allPages = responce.count;
		this.counter++;
		this.sortItems();
		this.setFavFilms(event);
	}

	setFavFilms(e) {
		this.favCount = this.displayedFilms.filter(el => el.isFavorite).length;
	}

	sortItems() {
		if (this.direct == 0) {
			this.displayedFilms = [...this.searchArray]
		}
		//сортировка по умолчанию по id
		if (this.direct !== 0) {
			this.displayedFilms.sort((a, b) => {
				let x = a.name.toLowerCase();
				let y = b.name.toLowerCase();
				if (x < y) { return -1 * this.direct }
				if (x > y) { return 1 * this.direct }
				return 0;
			})
		}
	}

	doSearch(searchString) {
		if (searchString.length !== 0 && searchString.length > 2) {
			this.searching = true;
			this.displayedFilms = [...this.searchArray.filter(el => {
				return el.name.toLowerCase().includes(searchString.toLowerCase())
			})]
		}
		if (searchString.length == 0) {
			this.searching = false;
			this.displayedFilms = [...this.searchArray];
		}
	}

	toggleBorder() {
		this.isBorder = !this.isBorder;
	}

}
