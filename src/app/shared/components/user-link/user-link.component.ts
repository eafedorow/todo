import { Component, OnInit } from '@angular/core';
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { MainStateModel } from "../../../store/main.state";

@Component({
  selector: 'app-user-link',
  templateUrl: './user-link.component.html',
  styleUrls: ['./user-link.component.scss']
})
export class UserLinkComponent implements OnInit {
  public userImgSrc: string = ''
  public username: string = 'Evgenii';
  public surname: string = 'Fedorov';

  @Select((state: { main: MainStateModel }) => state.main.isSidebarToggled)
  public isSidebarCollapsed$: Observable<MainStateModel>;

  ngOnInit(): void {
    this.userImgSrc = `https://robohash.org/Todo%20app%20user${Math.floor(Math.random() * 1000)}` || ''
  }
}
