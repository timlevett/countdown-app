import { Component} from '@angular/core';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {

  private future:Date;
  private diff:number;

  title : String;
  doomsDay = new Date("August 4, 2017 08:00:00")
  seconds : number;
  minutes : number;
  hours : number;
  days : number;
  workDays : number;

  roundHund(input:number) {
    return Math.round(input * 100) / 100;
  }

  ngOnInit() {
     this.future = new Date(this.doomsDay);
       Observable.interval(1000).map((x) => {
        this.diff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
    }).subscribe((x) => { 
      this.seconds = this.roundHund(this.diff);
      this.minutes = this.roundHund(this.seconds / 60);
      this.hours = this.roundHund(this.minutes / 60);
      this.days = this.roundHund(this.hours / 24);
      this.workDays = this.roundHund((this.days / 7) * 5);
    });
  }

}
