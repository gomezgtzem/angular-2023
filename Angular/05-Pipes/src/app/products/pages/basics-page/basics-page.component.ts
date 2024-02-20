import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'emmanuel';
  public nameUpper: string = 'EMMANUEL';
  public fullName: string = 'Emmanuel gOMEZ';

  public customDate: Date = new Date();
}
