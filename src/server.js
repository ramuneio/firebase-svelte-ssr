import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as server from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

if (dev) {
  polka() // You can also use Express
    .use(
      compression({ threshold: 0 }),
      sirv("static", { dev }),
      server.middleware()
    )
    .listen(PORT, err => {
      if (err) console.log("error", err);
    });
}

export default server;