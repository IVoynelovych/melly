import { addCom } from "./sass/js/c-post";
import { markUp } from "./sass/js/markup.js";
import { addDeleteEventListeners } from "./sass/js/d-del";
import { addEditEventListeners } from "./sass/js/u-patch.js";

markUp();
addDeleteEventListeners();
addEditEventListeners()
const send_btn = document.querySelector(".creat");
send_btn.addEventListener("click", addCom);
