import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  @Input({ required: true }) duration: number = 0
  @Input({ required: true }) message: string = ''

  constructor() {
    // NO ASYNC
    //before rending
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    //before and during render
    console.log('ngOnChange');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration']
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething()
    }
  }

  ngOnInit() {
    //after render
    //una vez
    // async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);
  }

  ngAfterViewInit() {
    //after render
    //hijos ya fueron renderizados o pintados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngDestroy');
    console.log('-'.repeat(10));
  }

  doSomething() {
    console.log('change duration');
  }
}
