import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@LakshAmplifAI/navbar",
//   app: () => System.import("@LakshAmplifAI/navbar"),
//   activeWhen: ["/"]
// });

registerApplication({
  name: "@LakshAmplifAI/single-spa-demo-react-header",
  app: () => System.import("@LakshAmplifAI/single-spa-demo-react-header"),
  activeWhen: ["/"]
});


registerApplication({
  name: "@LakshAmplifAI/single-spa-demo-react-home",
  app: () => System.import("@LakshAmplifAI/single-spa-demo-react-home"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@LakshAmplifAI/single-spa-demo-react-test-page",
  app: () => System.import("@LakshAmplifAI/single-spa-demo-react-test-page"),
  activeWhen: ["/"]
});


start({
  urlRerouteOnly: true,
});
