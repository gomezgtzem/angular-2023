import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = ' Emmanuel';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeCliente(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Miguel',
    'Martha',
    'Jade',
  ];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos un cliente',
    other: 'tenemos # clientes',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Emmanuel',
    age: 36,
    address: 'Ottawa, Canada',
  };

  // Async Pipes

  public myObservableTimer = interval(2000);

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      this.person.name = 'Otro nombre'
    }, 3500);
  });
}
