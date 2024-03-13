"use strict";

module.exports = ({ strapi }) => {
  // strapi.customFields.register({
  //   name: "PagesURL",
  //   pluginId: "pages-url",
  //   type: "string",
  // });
  strapi.customFields.register({
    name: "PagesURL",
    plugin: "pages-url",
    type: "string",
  });
};
