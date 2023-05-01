export default function ({route, redirect}) {
  let site_id = process.env.SITE;

  const redirects = require('./301_sites/' + site_id + '.js')

  const matchedRedirect = redirects.default.find(([oldPath]) => oldPath === route.path);

  const appendQueryString = (url, query) => {
    const params = new URLSearchParams(query);
    return params.toString() ? `${url}?${params}` : url;
  }

  if (route.path.startsWith('/reservation')) {
    const newDomain = process.env.OLD_DOMAIN;
    const newPath = newDomain + route.path;
    return redirect(301, appendQueryString(newPath, route.query));
  }

  if (route.path.startsWith('/odeme-yap')) {
    const newDomain = process.env.OLD_DOMAIN;
    const newPath = newDomain + route.path;
    return redirect(301, appendQueryString(newPath, route.query));
  }

  if (matchedRedirect) {
    const [, newPath] = matchedRedirect;
    return redirect(301, newPath);
  }
}
