import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) // SEMAFORO SERVICE
export class TrafficLightService {
  private lights = new BehaviorSubject<string>('verde')
  public lights$ = this.lights.asObservable() // CONVERTIR MI SUBJECT EN UN OBSERVABLE
  private lastValue: string = 'verde'

  constructor() {
    this.lights.subscribe((valor) => (this.lastValue = valor))
    interval(1000).subscribe(() => this.lastValue === 'verde' ? this.lights.next('rojo') : this.lights.next('verde'))
  }
}
