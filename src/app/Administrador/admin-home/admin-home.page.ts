import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
})
export class AdminHomePage implements OnInit {

  moduleSelect = 'GENERAL'

  constructor(private route: Router) { }

  ngOnInit() {
  }

  logout() {
    this.route.navigateByUrl('/login')
  }

}
