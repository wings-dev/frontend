require('dotenv').config()

export function apply(routes, resolve) {
  let site_id = process.env.SITE;

  if (site_id === "1") {
    routes.push({ path: '/eski-link', redirect: '/listele', statusCode: 301 });
  }

  if (site_id === "2") {
    // ...
  }
}
