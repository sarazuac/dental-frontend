import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable()
export class TimestampService {
  constructor(private http: Http) {}
  getTimestamps() {
    return this.http.get("http://localhost:8000/timestamp").pipe(
      map((response: Response) => {
        return response.json().timestamps;
      })
    );
  }
}
