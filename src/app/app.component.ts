import { Component, ComponentFactoryResolver, Injector, OnInit } from '@angular/core';
import { CustomComponent } from './custom/custom.component';
import swal from 'sweetalert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _resolver: ComponentFactoryResolver, private _injector: Injector) { }
  component;

  ngOnInit() {
    // important also add CustomComponent to entryComponents in AppModule
    const factory = this._resolver.resolveComponentFactory(CustomComponent);
    this.component = factory.create(this._injector);

    // passing Input() [optional]
    this.component.instance.someValue = 'Hello World';

    // Subscribing to Output()
    // component.instance.output.subscribe(event => console.log(event));

    this.component.changeDetectorRef.detectChanges();

    // after component created receive reference to native DOM Element (passed to SweetAlert)
    swal({
      content: this.component.location.nativeElement
    }).then( () => {
      this.component.destroy();
    });
  }

}
