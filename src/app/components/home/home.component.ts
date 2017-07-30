import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private dragulaService: DragulaService
  ) { 
      dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[1]}`);
      this.onDrop(value.slice(1));
    });
  }

  private onDrag(args) {
    let [e, el] = args;
    // do something
  }
  
  private onDrop(args) {
    let [e, el] = args;
    // do something
  }
  
  private onOver(args) {
    let [e, el, container] = args;
    // do something
  }
  
  private onOut(args) {
    let [e, el, container] = args;
    // do something
  }

  ngOnInit() {
  }

}
