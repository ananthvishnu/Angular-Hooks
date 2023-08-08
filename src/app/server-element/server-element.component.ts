import {
  Component,
  Input,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
   encapsulation: ViewEncapsulation.Emulated, // None
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: {
    type: string;
    name: string;
    content: string;
  } = { type: '', name: '', content: '' };
 @Input() name:string = '';

 constructor() {
  console.log('constructor called!');
}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text Content');
    
  }
  ngDoCheck(): void {
    console.log('ngDoCheck Called!');
  }

  ngAfterContentInit(): void {
    console.log(' ngAfterContentInit called!');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit checked!');
    
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked checked!');
    
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy Called!');
    
  }
  
}
