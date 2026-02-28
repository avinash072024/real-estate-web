import { Component, ElementRef, HostListener, Inject, inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  themeService = inject(ThemeService);
  // isScrolled = false;
  // isDarkMode = false;
  // isMenuOpen = false;

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   this.isScrolled = window.scrollY > 20;
  // }

  // ngOnInit() {
  //   // Acknowledge saved preference from local storage
  //   const savedTheme = localStorage.getItem('user-theme') || 'light';
  //   this.isDarkMode = savedTheme === 'dark';
  //   this.applyTheme();
  // }

  // toggleTheme() {
  //   this.isDarkMode = !this.isDarkMode;
  //   localStorage.setItem('user-theme', this.isDarkMode ? 'dark' : 'light');
  //   this.applyTheme();
  // }

  // private applyTheme() {
  //   document.documentElement.setAttribute('data-bs-theme', this.isDarkMode ? 'dark' : 'light');
  // }




  



  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;

  isScrolled = false;
  isDarkMode = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  ngOnInit() {
    // Persistent theme logic as per your requirement
    const savedTheme = localStorage.getItem('user-theme') || 'light';
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('user-theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    document.documentElement.setAttribute('data-bs-theme', this.isDarkMode ? 'dark' : 'light');
  }

  // Closes the mobile menu when a nav-item is clicked
  closeMenu() {
    if (this.navbarCollapse.nativeElement.classList.contains('show')) {
      this.navbarCollapse.nativeElement.classList.remove('show');
    }
  }
}