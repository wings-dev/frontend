export default function ({ app: { router }, $gtm }) {
  router.afterEach((to, from) => {
    console.log(from, to)
    if (from.name !== null) {
      $gtm.push({
        event: "nuxtRoute",
        routeName: to.name,
        pageUrl: to.fullPath,
        refererUrl: from.fullPath,
      });
    }
  });
}
