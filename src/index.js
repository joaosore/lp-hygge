import "bootstrap";
import { init_loader } from "./js/loader";
import { init_scroll } from "./js/scroll";
import { init_menu } from "./js/menu";
import { init_carousel } from "./js/carousel";
import { init_acordion } from "./js/acordion";
import { sendgrid } from "./js/sendgrid";
import { init_animation } from "./js/animation";
import { init_ancora } from "./js/ancora";

function init() {
  init_loader();
  init_scroll();
  init_menu();
  init_carousel();
  init_acordion();
  sendgrid();
  init_animation();
  init_ancora();
}
init();
