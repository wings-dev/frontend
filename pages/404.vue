<template>

<main class="main">
    <div class="container pb-sm-5">
        <div class="px-xl-4 mx-auto d-flex flex-column align-items-center text-center py-5 Notfound">
            <nuxt-img src="/img/404.png" width="516" alt="email icon" class="contain flex-shrink-0" loading="lazy" placeholder />
            <div class="col-12 col-lg-10 d-flex flex-column align-items-center contain py-sm-2 mb-5" >
                <h1 class="pt-2 mb-1">Ooooops..!</h1>
                <p class="col-lg-10  lh-sm">
                    <span>Bir şeyler ters gitti!</span>
                    Aradığınız sayfayı bulamadık.
                </p>
            </div>
            <a href="/" class="mb-3">
                <span class="d-inline-block"><i class="icon-arrow-left-2"></i> Anasayfaya Git</span>
            </a>
        </div>
    </div>
</main>

</template>

<script>
export default {
  name: 'Page404',
  layout: 'no-search',
  head() {
        return {
            title:"404"
        }
    },
}
</script>

