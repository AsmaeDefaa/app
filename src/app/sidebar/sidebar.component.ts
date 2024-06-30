import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importez CommonModule

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isSidebarClosed = window.innerWidth < 768;
  isSidebarHoverable = false;
  isDarkMode = false;

  menuItems = [
    {
      title: 'Home',
      icon: 'bx-home-alt',
      showSubmenu: false,
      sublinks: ['Nav Sub Link', 'Nav Sub Link', 'Nav Sub Link', 'Nav Sub Link']
    },
    {
      title: 'Overview',
      icon: 'bx-grid-alt',
      showSubmenu: false,
      sublinks: ['Nav Sub Link', 'Nav Sub Link', 'Nav Sub Link', 'Nav Sub Link']
    }
  ];

  otherLinks = [
    { title: 'Magic build', icon: 'bxs-magic-wand' },
    { title: 'Filters', icon: 'bx-loader-circle' },
    { title: 'Filter', icon: 'bx-filter' },
    { title: 'Upload new', icon: 'bx-cloud-upload' },
    { title: 'Notice board', icon: 'bx-flag' },
    { title: 'Award', icon: 'bx-medal' },
    { title: 'Setting', icon: 'bx-cog' },
    { title: 'Features', icon: 'bx-layer' }
  ];

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  collapseSidebar() {
    this.isSidebarClosed = true;
    this.isSidebarHoverable = true;
  }

  expandSidebar() {
    this.isSidebarClosed = false;
    this.isSidebarHoverable = false;
  }

  onSidebarMouseEnter() {
    if (this.isSidebarHoverable) {
      this.isSidebarClosed = false;
    }
  }

  onSidebarMouseLeave() {
    if (this.isSidebarHoverable) {
      this.isSidebarClosed = true;
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
  }

  toggleSubmenu(index: number) {
    this.menuItems[index].showSubmenu = !this.menuItems[index].showSubmenu;
    this.menuItems.forEach((item, i) => {
      if (i !== index) {
        item.showSubmenu = false;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isSidebarClosed = window.innerWidth < 768;
  }
}
