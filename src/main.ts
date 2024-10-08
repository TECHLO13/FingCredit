import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';  // Assure-toi d'utiliser provideRouter
import { routes } from './app/app.routes';  // Import de tes routes

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  // Fournit HttpClient
    provideRouter(routes) // Fournit le Router avec les routes définies
  ]
})
  .catch((err) => console.error(err));
