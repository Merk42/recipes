import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { STEPS_API } from '../const/types';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [],
  templateUrl: './steps.html',
  styleUrl: './steps.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Steps {
readonly steps = input.required<STEPS_API>()
}
