<template>
  <div>
    <filter-villa-component></filter-villa-component>
  </div>
</template>

<script>
export default {
  name: 'ListPage',
  head() {
    let site_id = process.env.SITE
    return {
      title: 'Listele',
      meta: [
        { hid: 'description', name: 'description', content: 'listele' },
        { hid: 'keywords', name: 'keywords', content: 'listele1, listele2, listele3' }
      ],
      link: [
        { rel: 'stylesheet', href: `/cdn/css/site_${site_id}/listele.css` }
      ]
    }
  },
}
</script>
