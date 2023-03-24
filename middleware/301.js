export default function ({route, redirect}) {
  let site_id = process.env.SITE;

  let redirects = [];

  if (site_id === "1") {
    redirects = [
      // Eski url, Yeni url
      ['/eski', '/kiralik-villa'],
      ['/eski-yol-2', '/yeni-yol-2'],
    ];
  }

  if (site_id === "2") {
    redirects = [
      ['/eski', 'http://google.com'],
      ['/eski2', '/kiralik-villa']
    ]
  }

  const matchedRedirect = redirects.find(([oldPath]) => oldPath === route.path);
  if (matchedRedirect) {
    const [, newPath] = matchedRedirect;
    return redirect(301, newPath);
  }
}
