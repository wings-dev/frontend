export default function ({ app }) {
  app.router.afterEach((to, from) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'nuxtRoute',
        pageType: 'PageView',
        pageUrl: to.fullPath,
        pageTitle: to.meta.title || '',
        referrer: from.fullPath || null
      })
    }
  })
}
