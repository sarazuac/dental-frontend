import { Component, OnInit, Input } from "@angular/core";
import { Timestamp } from "./timestamp.interface";

@Component({
  selector: "app-timestamp",
  templateUrl: "./timestamp.component.html",
  styleUrls: ["./timestamp.component.css"]
})
export class TimestampComponent implements OnInit {
  @Input() timestamp: Timestamp;
  editing = false;
  editValue = "";

  constructor() {}

  ngOnInit() {}
}
