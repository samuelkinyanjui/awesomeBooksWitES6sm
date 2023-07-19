import * as modulelist from './modules/moduleLinkedList.js';

import * as moduleFormhandling from './modules/moduleFormhandling.js';

import * as modulelink from './modules/modulenavigation.js';

import adddatetoapp from './modules/moduledate.js';

let erro = 'No errors';
if (modulelist === '') {
  erro = 'Connot create linked list errors';
}
if (moduleFormhandling === '') {
  erro = 'Connot handle form actvities errors';
}
if (modulelink === '') {
  erro = 'Connot handle Navigation actvities errors';
}
const errordisplay = document.createElement('div');
const inputerroeelement = document.createElement('input');
inputerroeelement.type = 'text';
inputerroeelement.value = erro;
errordisplay.appendChild(inputerroeelement);

adddatetoapp();
