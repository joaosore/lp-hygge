import "bootstrap";
import { init_loader } from "./js/loader";
import { init_scroll } from "./js/scroll";
import { init_menu } from "./js/menu";
import { init_carousel } from "./js/carousel";
import { init_acordion } from "./js/acordion";

function init() {
  init_loader();
  init_scroll();
  init_menu();
  init_carousel();
  init_acordion();
}
init();
