import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {
  message: any = { required: false };
  showColor:boolean = false;
  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) {
  }

  async ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      const id = this.route.snapshot.paramMap.get('id') || '';
      const hash = this.route.snapshot.paramMap.get('hash') || '';

      try {
        const result = await this.authService.emailVerification(id, hash);
        this.message = result.success;
        this.showColor = true;
      } catch (error:any) {
        this.message = error.error.error;
        this.showColor = false;
      }
    });
  }

}
