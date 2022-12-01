import { Injectable } from '@angular/core';

class Body { }
class Doors { }
class Engine {
  public start() {
    console.log("let's start");
  }
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

  // engine: Engine;
  // doors: Doors;
  // body: Body;

  constructor(
    private engine: Engine,
    private body: Body,
    private doors: Doors
  ) { }

  run() {
    this.engine.start();
  }
}
