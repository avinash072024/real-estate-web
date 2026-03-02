import { isPlatformBrowser } from '@angular/common';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Use Angular Signals for a reactive UI
  theme = signal<string>(localStorage.getItem('user-theme') || 'light');

  constructor() {
    this.applyTheme(this.theme());
  }

  toggleTheme() {
    const newTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(newTheme);
    localStorage.setItem('user-theme', newTheme);
    this.applyTheme(newTheme);
  }

  private applyTheme(theme: string) {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }

  getCurrentTheme(): string {
    if (isPlatformBrowser(this.platformId)) {
      return document.documentElement.getAttribute('data-bs-theme') || 'light';
    }
    return 'light';
  }
  platformId(platformId: any) {
    throw new Error('Method not implemented.');
  }
}
