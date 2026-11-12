import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navigation-bar',
  styleUrl: './navigation-bar.css',
  templateUrl: './navigation-bar.html',
  standalone: true
})
export class NavigationBar {}
