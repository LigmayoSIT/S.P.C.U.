import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBar } from './navigation-bar/navigation-bar';
import { MainPage } from './main-page/main-page';
import { FormsPage } from './forms-page/forms-page';
import { PublicViewingPage } from './public-viewing-page/public-viewing-page';

@Component({
  imports: [RouterOutlet, NavigationBar, MainPage, FormsPage, PublicViewingPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  standalone: true
})
export class App {
  protected readonly title = signal('SPCU');
}
