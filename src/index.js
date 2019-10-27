import "bootstrap";
import { init_loader } from "./js/loader";
import { init_scroll } from "./js/scroll";
import { init_menu } from "./js/menu";

function init() {
  init_loader();
  init_scroll();
  init_menu();
}
init();
