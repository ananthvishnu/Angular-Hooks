import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Testserver', content: 'just a test!' },
  ];

  onServerAdded(serverData: { 
    serverName: string; 
    serverContent: string 
  }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onChangeFirst() {
    console.log(this.serverElements);
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst(){
    console.log(this.serverElements);
    this.serverElements.splice(0,1)
  }
}

// argument) needs to be applied to ALL usages of @ViewChild() (and also @ContentChild()
// which you'll learn about later) IF you plan on accessing the selected element inside of ngOnInit().
// If you DON'T access the selected element in ngOnInit (but anywhere else in your component),
// set static: false instead!
// If you're using Angular 9+, you only need to add { static: true } (if needed) but not { static: false }.
