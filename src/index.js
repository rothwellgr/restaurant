import "./styles.css";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";

renderHome();

const homeEvent = document.getElementById("home");
homeEvent.addEventListener('click', renderHome);

const menuEvent = document.getElementById("menu");
menuEvent.addEventListener('click', renderMenu);

const aboutEvent = document.getElementById("about");
aboutEvent.addEventListener('click', renderAbout);