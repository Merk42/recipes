import { Component, input } from '@angular/core';
import { STEPS_API } from '../const/types';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [],
  templateUrl: './steps.html',
  styleUrl: './steps.scss'
})
export class Steps {
readonly steps = input.required<STEPS_API>()
}
