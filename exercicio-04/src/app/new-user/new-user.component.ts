import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  newUser: User = {} as User

  constructor(private userService: UserService, 
            private router: Router) { }

  ngOnInit(): void {
  }

  saveData(form: NgForm) {
    this.userService.addUser(this.newUser)
    this.userService.setLoggedUser(this.newUser)
    this.newUser = {} as User
    form.resetForm()

    this.router.navigate(['/feed']);
  }
}
