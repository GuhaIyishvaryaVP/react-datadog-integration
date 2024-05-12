import { client } from "@datadog/datadog-api-client";
import { HttpLibraryWithProxy } from "./Proxy";

const configurationOpts = {
  authMethods: {
    apiKeyAuth: "6b4c8cdf4a48d7a8d64f27a2fe42bcab",
    appKeyAuth: "db732924c0c799929e1507018e7ad4a61beca126",
  },
  httpLibrary: new HttpLibraryWithProxy(),
};

export const configuration = client.createConfiguration(configurationOpts);
