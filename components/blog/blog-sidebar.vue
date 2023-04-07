<template>
    <div class="Blog-sidebar ">
        <div class="Blog-sidebar-title">
            <i class="icon-header-phone"></i>
            <h3>BLOG</h3>
        </div>
        <div class="Blog-sidebar-in">
             <template v-for="(item,index) in blogMenu" >
                <div class="Blog-sidebar-item" v-if="item.children" :key="index">
                    <button class="Blog-sidebar-item-button" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#menu'+index" aria-expanded="false">{{ item.text }} <i class="icon-down-arrow"></i></button>
                    <div class="collapse" :id="'menu'+index">
                        <div class="card card-body">
                            <nuxt-link v-for="(child,href) in item.children" :key="href" :to="'/blog/'+child.href" class="Blog-sidebar-item-link">- {{ child.text }}</nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="Blog-sidebar-item" v-else :key="index">
                    <a href="" class="Blog-sidebar-item-button" type="button">{{ item.text }}</a>

                </div>
            </template> 
            <!-- <div class="Blog-sidebar-item">
                <button class="Blog-sidebar-item-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2"
                    aria-expanded="false">Kalkan <i class="icon-down-arrow"></i></button>
                <div class="collapse" id="collapse2">
                    <div class="card card-body">
                        <a href="" class="Blog-sidebar-item-link">- Kalkan Hakkında</a>
                        <a href="" class="Blog-sidebar-item-link">- Kalkanda Yer Alan Plajlar</a>
                        <a href="" class="Blog-sidebar-item-link">- Kalkanda Yapılacaklar</a>
                    </div>
                </div>
            </div>
            <div class="Blog-sidebar-item">
                <button class="Blog-sidebar-item-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3"
                    aria-expanded="false">Marmaris Bölgesi <i class="icon-down-arrow"></i></button>
                <div class="collapse" id="collapse3">
                    <div class="card card-body">
                        <a href="" class="Blog-sidebar-item-link">- Kalkan Hakkında</a>
                        <a href="" class="Blog-sidebar-item-link">- Kalkanda Yer Alan Plajlar</a>
                        <a href="" class="Blog-sidebar-item-link">- Kalkanda Yapılacaklar</a>
                    </div>
                </div>
            </div>
            <div class="Blog-sidebar-item">
                <button class="Blog-sidebar-item-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4"
                    aria-expanded="false">Bodrum Bölgesi <i class="icon-down-arrow"></i></button>
                <div class="collapse" id="collapse4">
                    <div class="card card-body">
                        <a href="" class="Blog-sidebar-item-link">- Kalkan Hakkında</a>
                        <a href="" class="Blog-sidebar-item-link">- Kalkanda Yer Alan Plajlar</a>
                        <a href="" class="Blog-sidebar-item-link">- Kalkanda Yapılacaklar</a>
                    </div>
                </div>
            </div>
            <div class="Blog-sidebar-item">
                <button class="Blog-sidebar-item-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5"
                    aria-expanded="false">Dalyan Bölgesi <i class="icon-down-arrow"></i></button>
                <div class="collapse" id="collapse5">
                    <div class="card card-body">
                        <a href="" class="Blog-sidebar-item-link">- Kalkan Hakkında</a>
                        <a href="" class="Blog-sidebar-item-link">- Kalkanda Yer Alan Plajlar</a>
                        <a href="" class="Blog-sidebar-item-link">- Kalkanda Yapılacaklar</a>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogMenu: [],
        }
    },
    created() {
        // const menuData = { "topmenu": [{ "href": "sss", "text": "S.S.S", "target": "_self" }, { "href": "hakkimizda", "text": "Hakk\u0131m\u0131zda", "target": "_self" }, { "href": "blog", "text": "Blog", "target": "_self" }, { "href": "iletisim", "text": "\u0130leti\u015fim", "target": "_self" }], "mainmenu": [{ "href": "kiralik-villa", "text": "Kiral\u0131k Villalar", "target": "_self" }, { "href": "", "text": "Villa Se\u00e7enekleri", "target": "_self", "children": [{ "href": "", "text": "Antalya Kiral\u0131k Villa", "target": "_self", "children": [{ "href": "fethiye-kiralik-villa", "text": "Fethiye Kiral\u0131k Villa", "target": "_self" }, { "href": "dalaman-kiralik-villa", "text": "Dalaman Kiral\u0131k Villa", "target": "_self" }, { "href": "bodrum-kiralik-villa", "text": "Bodrum Kiral\u0131k Villa", "target": "_self" }] }, { "href": "", "text": "Mu\u011fla Kiral\u0131k Villa", "target": "_self", "children": [{ "href": "fethiye-kiralik-villa", "text": "Fethiye Kiral\u0131k Villa", "target": "_self" }, { "href": "dalaman-kiralik-villa", "text": "Dalaman Kiral\u0131k Villa", "target": "_self" }, { "href": "bodrum-kiralik-villa", "text": "Bodrum Kiral\u0131k Villa", "target": "_self" }] }] }, { "href": "", "text": "Pop\u00fcler B\u00f6lgeler", "target": "_self", "children": [{ "href": "ozel-bolge", "text": "\u00d6zel B\u00f6lgeler", "target": "_self", "children": [{ "href": "cocuk-havuzlu", "text": "\u00c7ocuk Havuzlu", "target": "_self" }, { "href": "deniz-manzarali", "text": "Deniz Manzaral\u0131", "target": "_self" }, { "href": "ozel-havuzlu", "text": "\u00d6zel Havuzlu", "target": "_self" }, { "href": "jakuzili-villalar", "text": "Jakuzili Villalar", "target": "_self" }, { "href": "luks-villalar", "text": "L\u00fcks Villalar", "target": "_self" }, { "href": "balayi-villalari", "text": "Balay\u0131 Villalar\u0131", "target": "_self" }] }, { "href": "", "text": "Pop\u00fcler Villa Se\u00e7enekleri", "target": "_self", "children": [{ "href": "fethiye-kiralik-villa", "text": "Fethiye Kiral\u0131k Villa", "target": "_self" }, { "href": "dalaman-kiralik-villa", "text": "Dalaman Kiral\u0131k Villa", "target": "_self" }, { "href": "bodrum-kiralik-villa", "text": "Bodrum Kiral\u0131k Villa", "target": "_self" }, { "href": "marmaris-kiralik-villa", "text": "Marmaris Kiral\u0131k Villa", "target": "_self" }] }] }, { "href": "iletisim", "text": "\u0130leti\u015fim", "target": "_self" }], "foootermenu": [{ "href": "", "text": "Villa Kalkan", "target": "_self" }, { "href": "gizlilik-politikasi", "text": "Gizlilik Politikas\u0131", "target": "_self" }, { "href": "kvkk-aydinlatma-metni", "text": "KVKK", "target": "_self" }, { "href": "rezervasyon-kosullari", "text": "Rezervasyon Ko\u015fullar\u0131", "target": "_self" }] }

        const blogMenuData = this.$store.state['settings'].menuData;

        // this.amenites = JSON.parse(JSON.stringify(searchData.amenites));

        this.blogMenu = blogMenuData.blogmenu;
        console.log(this.blogMenu[0].children.length)
        console.log(this.blogMenu)
    },
}
</script>