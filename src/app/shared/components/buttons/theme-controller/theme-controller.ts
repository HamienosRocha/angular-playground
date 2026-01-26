import { AfterViewInit, Component, computed, effect, signal, linkedSignal, inject, DOCUMENT } from '@angular/core';

@Component({
  selector: 'app-theme-controller',
  imports: [],
  templateUrl: './theme-controller.html',
  styleUrl: './theme-controller.css',
})
export class ThemeController implements AfterViewInit {
  private document = inject(DOCUMENT);

  private IS_DARK_STORAGE_KEY = 'is_dak_theme';

  protected currentThemeIsDark = signal<boolean>(false);

  protected currentIcon = computed(() => {
    return this.currentThemeIsDark() ? 'fa-regular fa-moon' : 'fa-regular fa-sun';
  });

  ngAfterViewInit(): void {
    this.currentThemeIsDark.set(this.themeIsDark());
    this.applyTheme();
  }

  protected toggleTheme() {
    this.currentThemeIsDark.set(!this.themeIsDark());
    localStorage.setItem(this.IS_DARK_STORAGE_KEY, JSON.stringify(this.currentThemeIsDark()));
    this.applyTheme();
  }

  protected themeIsDark(): boolean {
    return localStorage.getItem(this.IS_DARK_STORAGE_KEY) === 'true';
  }

  protected applyTheme() {
    const html = this.document.querySelector('html');
    if (!html) return;

    html.dataset['theme'] = this.themeIsDark() ? 'dracula' : 'nord';
  }
}
