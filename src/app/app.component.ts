import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  status!: boolean;

  constructor(private client: HttpClient) {}

  ngOnInit(): void {
      this.client.get<boolean>('http://olejarczykjakub.ddns.net:8080/api/v1/get-server-status')
        .pipe(take(1))
        .subscribe(status => this.status = status);
  }
}
