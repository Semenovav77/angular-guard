import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "src/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public returnUrl = ''
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.userService.userIsLogIn.subscribe( () => {
      this.userService.userIsLogIn.value && this.router.navigate([this.returnUrl])
    })
  }

  onSubmit(form: NgForm) {
    this.userService.setUserLogIn()
    form.reset();}

}
