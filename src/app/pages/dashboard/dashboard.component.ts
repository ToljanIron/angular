import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  showInputNum: boolean = false;
  success: any;

  dashboardForm: FormGroup = new FormGroup({
    count: new FormControl('', Validators.compose([Validators.required, Validators.max(500), Validators.min(10)])),
  });

  constructor(private userService: UserService) {
  }

  async onSubmit() {
    try {
      this.success = await this.userService.seedUsers(this.dashboardForm);
    } catch (error) {
      console.log(error);
    }
  }
}
