import { Component } from '@angular/core';
import { HeroServiceService } from './services/hero-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroServiceService]
})
export class AppComponent {
  title = 'tour_of_heroes';
}
