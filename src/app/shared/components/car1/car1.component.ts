import { Component, OnDestroy } from '@angular/core';
import { TrafficLightService } from 'src/app/services/traffic-light.service';

@Component({
  selector: 'app-car1',
  templateUrl: './car1.component.html',
  styleUrls: ['./car1.component.scss']
})
export class Car1Component {
  constructor(public trafficLightService: TrafficLightService) {}
}
