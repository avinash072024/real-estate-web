import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  appName: string = Constants.APP_NAME;
  appName1: string = Constants.APP_NAME_STR1;
  appName2: string = Constants.APP_NAME_STR2;
}
