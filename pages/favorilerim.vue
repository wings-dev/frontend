<template>
  <main class="main">
    <section class="Text-banner">
      <div class="container">
        <div class="Text-banner-in">
          <h1>FAVORİLERİM </h1>
        </div>
      </div>
    </section>
    <favorities></favorities>
  </main>
</template>

<script>
export default {
  name: 'FavPage',
  layout: 'no-search',
  head() {
    return {
      title: 'Favorilerim',
      meta: [
        { hid: 'description', name: 'description', content: 'anasayfa' },
        { hid: 'keywords', name: 'keywords', content: 'anasayfa1, anasayfa2, anasayfa3' }
      ],
     
    }
  }
}
</script>

