import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { User } from './shared/user.model'
import { UserService } from './shared/user.service'
import { error } from 'util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  UserForm: FormGroup
  title = 'AngularFrontEnd And NodeBackEnd';
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }
  ngOnInit() {
    this.UserForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
  }

  onFormSubmit() {
    const user = this.UserForm.value;
    this.createUser(user)
  }

  createUser(user: User) {
    this.userService.createUser(user).subscribe(
      (data) => {
        console.log(data);
      },
      error => {
        console.error(error.massage);
      }

    )
  }
}
