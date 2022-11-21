import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idle } from 'idlejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rundleDirectory';

  constructor(private router: Router) {}

  redirect() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    const idle = new Idle()
      .whenNotInteractive()
      .within(5)
      .do(() => this.redirect())
      .start();
  }
}
