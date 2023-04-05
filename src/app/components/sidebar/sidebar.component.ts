import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  userImgSrc: string = ''
  @Input() isSidebarCollapsed = false;
  collapseSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  ngOnInit(): void {
    this.userImgSrc = `https://robohash.org/Todo%20app%20user${Math.floor(Math.random() * 1000)}` || ''
    // this.userImgSrc = ''
  }

}
