import { W as WebApp$1 } from "./WebApp.js";
import { _ as _sfc_main } from "./App3.js";
import "./top.js";
import "./vendor.js";
class WebApp extends WebApp$1 {
  constructor() {
    super(_sfc_main, 300, 475);
  }
}
let app = new WebApp();
app.mount();
app.$el.style.border = "solid 0.1em";