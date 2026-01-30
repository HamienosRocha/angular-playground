import { Component, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

import {
  ThemeController,
} from '../../../shared/components/buttons/theme-controller/theme-controller';

@Component({
  selector: 'app-navbar',
  imports: [ThemeController],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private readonly router = inject(Router);
  protected title = inject(Title);

  drawerId = input.required<string>();

  pageTitle = signal('');

  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe({
      next: event => {
        if (event instanceof NavigationEnd) {
          setTimeout(() => {
            this.pageTitle.set(this.title.getTitle());
          }, 50);
        }
      }
    });
  }
}
