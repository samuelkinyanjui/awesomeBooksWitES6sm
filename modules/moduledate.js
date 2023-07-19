import { DateTime } from './luxon.js';

export default function adddatetoapp() {
  const now = DateTime.now();
  const datediv = document.createElement('div');
  const datetextv = document.createElement('input');
  datetextv.type = 'text';
  datetextv.value = now;
  datetextv.classList.add('class_timediv');
  datediv.append(datetextv);
  const divmain = document.getElementById('timedivid');
  divmain.appendChild(datediv);
}
