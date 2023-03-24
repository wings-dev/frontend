<template>
  <div>
    
  </div>
</template>

<script>


export default {
  name: 'ListPage',
  
  data() {
    return {
    }
  },
  async asyncData({ $getRedisKey,params }) {
    console.log(params.category)
        // const site_id = process.env.SITE;
        // let pageData = {};
        // pageData = await $getRedisKey(`web:${site_id}:pages:hakkimizda`);
        // return { pageData }
    }
}
</script>
