import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // Import de HttpClientModule via provideHttpClient

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient() // Ajoute HttpClient ici
  ]
})
  .catch((err) => console.error(err));
