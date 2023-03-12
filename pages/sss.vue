<template>
    <main class="main">
        <section class="Sss-search">
            <div class="container">
                <div class="Sss-search-in">
                    <h3>YARDIM MERKEZİ</h3>
                    <h1>SİZE NASIL YARDIMCI OLABİLİRİZ</h1>
                    <form action="" class="Sss-search-form">
                        <label for="">
                            <i class="icon-search"></i>
                            <input type="text" placeholder="Villa’nın şehir merkezine uzaklıklarını nasıl görebilirim">
                            <button type="submit">Ara</button>
                        </label>
                    </form>
                </div>
            </div>
        </section>
        <section class="Sss">
            <div class="container">
                <div class="Sss-in">
                    <h2 class="Sss-title">En çok sorulan sorular</h2>
                    <div class="Sss-list accordion" id="accordionSSS">
                        <div class="accordion-item">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#sss1" aria-expanded="false" aria-controls="sss1">
                                Nasıl rezervasyon yapabilirim ?

                                <i class="icon-down-chevron"></i>
                            </button>
                            <div id="sss1" class="accordion-collapse collapse " data-bs-parent="#accordionSSS">
                                <div class="accordion-body">
                                    <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi
                                        yemeklerinizi pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası
                                        hazırlayabilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#sss3" aria-expanded="false" aria-controls="sss3">
                                Nasıl rezervasyon yapabilirim ?
                                <i class="icon-down-chevron"></i>
                            </button>
                            <div id="sss2" class="accordion-collapse collapse " data-bs-parent="#accordionSSS">
                                <div class="accordion-body">
                                    <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi
                                        yemeklerinizi pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası
                                        hazırlayabilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#sss3" aria-expanded="false" aria-controls="sss2">
                                Nasıl rezervasyon yapabilirim ?
                                <i class="icon-down-chevron"></i>
                            </button>
                            <div id="sss2" class="accordion-collapse collapse " data-bs-parent="#accordionSSS">
                                <div class="accordion-body">
                                    <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi
                                        yemeklerinizi pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası
                                        hazırlayabilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
  
<script>
export default {
    name: 'SSS',
    layout: 'no-search',
    head() {
        return {
            title: 'Sıkça Sorulan Sorular',
            meta: [
                { hid: 'description', name: 'description', content: 'anasayfa' },
                { hid: 'keywords', name: 'keywords', content: 'anasayfa1, anasayfa2, anasayfa3' }
            ],
            link: [
                { rel: 'stylesheet', href: `/css/sss.min.css` }
            ]
        }
    }
}
</script>
  
  