import { Component, OnInit } from "@angular/core";
import { Timestamp } from "../timestamp/timestamp.interface";
import { TimestampService } from "../timestamp/timestamp.service";

@Component({
  selector: "app-timestamps",
  templateUrl: "./timestamps.component.html",
  styleUrls: ["./timestamps.component.css"]
})
export class TimestampsComponent implements OnInit {
  timestamps: Timestamp[];
  constructor(private timestampService: TimestampService) {}

  ngOnInit() {}

  onGetTimestamps() {
    this.timestampService
      .getTimestamps()
      .subscribe(
        (timestamps: Timestamp[]) => (this.timestamps = timestamps),
        (error: Response) => console.log(error)
      );
  }
}
