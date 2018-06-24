import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
//import { FilmsComponent } from './films/films.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FilmItemComponent } from './film-item/film-item.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { SearchComponent } from './search/search.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MatCardModule,
		MatButtonModule,
		MatGridListModule,
		MatSelectModule,
		MatToolbarModule,
		MatIconModule,
		MatInputModule
	],
	declarations: [
		MainComponent,
		DetailsComponent,
		FilmItemComponent,
		FilmsListComponent,
		SearchComponent
	]
})
export class FilmCatalogModule { }
