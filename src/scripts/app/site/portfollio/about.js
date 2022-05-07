import getComp from 'setjs/template/component.js';

export default {
  templates: ['site/about'],
  comp: function () {
    let page = getComp('site/about');
    return page;
  },
};
