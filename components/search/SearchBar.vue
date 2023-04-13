<template>
    <section class="search-engine-section position-relative pt-3">
        <div class="container pt-1">
            <form action="" class="search-engine">
                <nav>
                    <div class="nav nav-tabs border-0 lh-sm" id="search-tab" role="tablist">
                        <nuxt-link to="/" button class="nav-link text-white ls-05 py-2 py-sm-3 px-3 px-sm-4 mb-0 active"
                        :class="{ 'active': $route.path == '/kiralik-villa' || $route.path == '/kiralik-villa-ara' || $route.path == '/'}"
                             type="button"><span
                                class="d-inline-block fw-medium px-2 px-sm-3 py-1">Yurt İçi
                                Villalar</span></nuxt-link>
                        <!-- <nuxt-link to="/" button class="nav-link text-white ls-05 py-2 py-sm-3 px-3 px-sm-4 mb-0"
                            :class="{ 'active': $route.path == '/kiralik-villa-ara' || $route.path == '/' || $route.path == '/kiralik-villa' }" type="button"><span
                                class="d-inline-block fw-medium px-2 px-sm-3 py-1">Yurt İçi
                                Villalar</span></nuxt-link> -->

                        <nuxt-link to="yurtdisi-kiralik-villa"
                            class="nav-link text-white ls-05 py-2 py-sm-3 px-3 px-sm-4 mb-0"
                            :class="{ 'active': $route.path == '/yurtdisi-kiralik-villa' || $route.path == '/yurtdisi-kiralik-villa-ara'}"><span
                                class="d-inline-block fw-medium px-2 px-sm-3 py-1">Yurt Dışı
                                Villalar</span></nuxt-link>
                        <nuxt-link to="otel" class="nav-link-otel" :class="{ 'active': $route.path == '/otel' || $route.path == '/oteller' }">
                            <i class="icon-otel-new"></i>
                            <span
                                class="d-inline-block fw-medium px-2 px-sm-3 py-1">Otel</span><!-- <span class="comingsoon">ÇOK YAKINDA</span> --></nuxt-link>
                        <a href="tel:4448484" class="Header-call">
                            <i class="icon-header-call"></i>
                            <p><span>Yardım / Destek</span>444 8 484</p>
                        </a>
                    </div>
                </nav>
                <div class="tab-content" id="search-tabContent">
                    <div class="tab-pane fade "
                    :class="{ 'show active': $route.path == '/kiralik-villa' || $route.path == '/kiralik-villa-ara' || $route.path == '/'}"
                         id="nav-home"
                        role="tabpanel" aria-labelledby="nav-home-tab">
                        <search-villa-component :key="$route.path"></search-villa-component>
                    </div>
                    <!-- <div class="tab-pane fade"
                        :class="{ 'show active': $route.path == '/kiralik-villa-ara' || $route.path == '/' || $route.path == '/kiralik-villa' }" id="nav-home"
                        role="tabpanel" aria-labelledby="nav-home-tab">
                        <search-villa-component :key="$route.path"></search-villa-component>
                    </div> -->
                    <div class="tab-pane fade" :class="{ 'show active': $route.path == '/yurtdisi-kiralik-villa' || $route.path == '/yurtdisi-kiralik-villa-ara' }"
                        id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <search-abroad-villa-component :key="$route.path"></search-abroad-villa-component>
                    </div>
                    <div class="tab-pane fade " :class="{ 'show active': $route.path == '/otel' || $route.path == '/oteller' }" id="nav-contact"
                        role="tabpanel" aria-labelledby="nav-contact-tab">
                        <search-hotel-component :key="$route.path"></search-hotel-component>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
