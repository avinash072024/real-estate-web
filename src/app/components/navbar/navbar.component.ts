import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Constants } from '../../models/constants';
import { ThemeTogglerComponent } from '../theme-toggler/theme-toggler.component';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, RouterLink, RouterLinkActive, ThemeTogglerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;

  isDarkMode: boolean = false;
  isScrolled: boolean = false;
  isMenuOpen: boolean = false;

  appName1: string = Constants.APP_NAME_STR1;
  appName2: string = Constants.APP_NAME_STR2;

  navLinks = Constants.NAV_LINKS;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  ngOnInit() {
    // Load the manually saved theme or default to light
    const savedTheme = localStorage.getItem('user-theme') || 'light';
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    localStorage.setItem('user-theme', theme);
    this.applyTheme();
    this.closeMenu();
  }

  private applyTheme() {
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', theme);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    if (this.navbarCollapse.nativeElement.classList.contains('show')) {
      this.navbarCollapse.nativeElement.classList.remove('show');
      this.isMenuOpen = !this.isMenuOpen;
    } else {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
