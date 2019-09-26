import { routePrefix, routeRegex } from "../openmrs-esm-root-config.lib";

export const coreApplications = {
  "@openmrs/esm-devtools": shouldShowDevtools,
  "@openmrs/esm-dashboard": shouldShowDashboard
};

// To learn more about top level routing in single-spa, go to https://single-spa.js.org/docs/configuration.html#activity-function

function shouldShowDashboard(location) {
  return routePrefix("dashboard", location);
}

function shouldShowDevtools() {
  return localStorage.getItem("openmrs:devtools");
}
