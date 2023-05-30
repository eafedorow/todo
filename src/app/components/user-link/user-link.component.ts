import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-link',
  templateUrl: './user-link.component.html',
  styleUrls: ['./user-link.component.scss']
})
export class UserLinkComponent implements OnInit {
  userImgSrc: string = ''
  username: string = 'Evgenii';
  surname: string = 'Fedorov';
  isAuth: boolean = false;
  isSidebarCollapsed: boolean = false;
  ngOnInit(): void {
    this.userImgSrc = `https://robohash.org/Todo%20app%20user${Math.floor(Math.random() * 1000)}` || ''
  }
}
