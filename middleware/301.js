export default function ({route, redirect}) {
  let site_id = process.env.SITE;

  if (route.path.startsWith('/reservation')) {
    const newDomain = process.env.OLD_DOMAIN;
    return redirect(301, newDomain + route.path);
  }

  const redirects = require('./301_sites/' + site_id + '.js')

  const matchedRedirect = redirects.default.find(([oldPath]) => oldPath === route.path);

  if (matchedRedirect) {
    const [, newPath] = matchedRedirect;
    return redirect(301, newPath);
  }
}
