import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input()
  userDetail : User = {} as User

  @Output()
  newEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  dispatchEvent() {
    const now = (new Date()).getMilliseconds().toString()
    this.newEvent.emit(now)
  }

}
