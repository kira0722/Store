import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Counter } from '../../../Shared/components/counter/counter';
import { WaveAudio } from '../../../Info/Components/wave-audio/wave-audio';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, Counter, WaveAudio],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  duration = signal(1000);
  message = signal('Hola');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
