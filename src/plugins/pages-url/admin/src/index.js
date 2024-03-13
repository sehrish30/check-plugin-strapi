import { prefixPluginTranslations } from "@strapi/helper-plugin";
import pluginPkg from "../../package.json";
import pluginId from "./pluginId";
import Initializer from "./components/Initializer";
import PluginIcon from "./components/PluginIcon";

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.customFields.register({
      name: "PagesURL",
      icon: PluginIcon,
      pluginId: "pages-url",
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: name,
      },
      intlDescription: {
        id: `${pluginId}.plugin.description`,
        defaultMessage: "Add Page URL",
      },
      components: {
        Input: async () => import("./pages/App"),
      },
      type: "text",
      options: {},
      permissions: [
        // Uncomment to set the permissions of the plugin here
        // {
        //   action: '', // the action name should be plugin::plugin-name.actionType
        //   subject: null,
        // },
      ],
    });
  },
};
