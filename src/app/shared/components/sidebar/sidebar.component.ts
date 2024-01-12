import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import { ToggleSidebar } from "../../../store/actions/sidebar.actions";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit{
  public isSidebarCollapsed: boolean = false;
  constructor(private store: Store) {}

  public toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.store.dispatch(new ToggleSidebar(this.isSidebarCollapsed))
  }
  ngOnInit(): void {
  }
}
