
(function () {
  'use strict';

  window.$scope = {};

  const dataAttrs = ['inp1', 'inp2', 'inp3'];
  const attachEventHandlers = (keys) => {
    keys.forEach(key => {
      const elements = document.querySelectorAll(`[data-key='${key}']`);
      elements.forEach(element => {
        element.onkeyup = (ev) => {
          elements.forEach(element => {
            element.value = ev.target.value;
          });
        };
      });

      Object.defineProperty(window.$scope, key, {
        set: (val) => {
          elements.forEach(element => {
            element.value = val;
          });
        },
        get: () => elements[0].value
      });
    });
  }

  attachEventHandlers(dataAttrs);

}) ();
