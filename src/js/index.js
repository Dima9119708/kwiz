import '@babel/polyfill'
import '../css/main.css'
import {Kwiz} from "./Kwiz";
import { startItem } from "./startItem";
import {
    kwizItems,
    questions
} from "./items";
import { finishItem } from "./finishItem";

kwizItems.unshift(startItem)
kwizItems.push(finishItem)

new Kwiz('#app', kwizItems, questions)
