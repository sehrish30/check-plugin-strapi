'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('pages-url')
      .service('myService')
      .getWelcomeMessage();
  },
});
