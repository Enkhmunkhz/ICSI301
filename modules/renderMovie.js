import { information } from "./information.js";

export class renderMovie {
  constructor(data) {
    this.data = data;
  }
  render() {
    return new information(this.data).render();
  }
}
