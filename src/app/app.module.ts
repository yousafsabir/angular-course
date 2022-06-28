import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ThebasicsComponent } from './thebasics/thebasics.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ListComponent } from './components/recipes/list/list.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping/shopping-edit/shopping-edit.component';
import { ShoppingComponent } from './components/shopping/shopping.component';

@NgModule({
  declarations: [AppComponent, ThebasicsComponent, HeaderComponent, RecipesComponent, ListComponent, DetailComponent, ShoppingListComponent, ShoppingEditComponent, ShoppingComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
