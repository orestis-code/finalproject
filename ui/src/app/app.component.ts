import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { appRouter } from './app.routes';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, AuthComponent, RouterOutlet] // Include RouterOutlet for routing
})
export class AppComponent {
  title = 'User Management App';
}

bootstrapApplication(AppComponent, {
  providers: [
    appRouter,
    provideHttpClient()
  ]
}).catch((err) =>
  console.error(err)
);
