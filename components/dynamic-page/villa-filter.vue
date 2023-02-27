<template>
  <div>
    <section class="highlight-section bg-theme-light-2 pt-5 pb-4 mt-n5">
      <div class="container">
        <div class="row pt-4 pb-md-2">
          <div class="note-box col-12 col-lg-12 pe-lg-5">
            <h1 class="highlight-section-title">Fethiye Kiralık Villa</h1>
            <p class="highlight-section-desc">
              Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
              masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
              mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
              kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
              Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.
              Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
              masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
              mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
              kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
              Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.
              Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
              masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
              mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
              kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
              Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.
              Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
              masmavi denizi ile ünlü bir adres. Fethiye’nin tadını gerçekten çıkarmak isteyenler içinse, en
              mantıklı seçenek villa kiralama. Günlük ya da haftalık villa tatili yapmak isteyenlere jakuzili,
              kapalı havuzlu ya da bahçeli kiralık villa alternatifleri sunulan
              Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.</p>
            <div class="highlight-section-desc-more-button read-more-button">+ TÜMÜNÜ OKU</div>
            <div class="highlight-section-desc-more-button">- DARALT</div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mt-2">
      <client-only>
        <login-modal>
          <template #button>
            <button type="button" data-bs-toggle="modal" data-bs-target="#loginModal">GİRİŞ YAP MODAL</button>
          </template>
        </login-modal>
      </client-only>

      <client-only>
        <register-modal>
          <template #button>
            <button type="button" data-bs-toggle="modal" data-bs-target="#signupModal">KAYIT MODAL</button>
          </template>
        </register-modal>
      </client-only>

      <button type="button" data-bs-toggle="modal" data-bs-target="#callModal">SİZİ ARAYALIM MODAL</button>
      <button type="button" data-bs-toggle="modal" data-bs-target="#favModal">FAV MODAL</button>


      <!-- Sizi Arayalım Modal -->
      <div class="modal fade Login" id="callModal" tabindex="-1" aria-labelledby="callModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                class="icon-login-close"></i></button>
            <div class="Login-in">
              <div class="Login-left" style="background-image:url(/img/sizi-arayalim-bg.jpg)"></div>
              <div class="Login-right">
                <div class="Login-right-in">
                  <h2><b>SİZİ </b> ARAYALIM</h2>
                  <form action="" class="Login-form">
                    <label for="" class="Login-form-item mb-2">
                      <input type="text" placeholder="İsim Soyisim" value="">
                    </label>
                    <p class="Login-form-alert  mt-2 text-danger text-sm mail-alert mail-alert-signup"></p>
                    <label for="" class="Login-form-item Login-form-item-tr mb-2">
                      <vue-tel-input v-model="phoneNumber" @input="onInput" v-bind="phoneProps"></vue-tel-input>
                    </label>
                    <label for="" class="Login-form-item Login-form-item-select mb-3">
                      <client-only>
                        <VSelect v-model="callSubject" :options="callValues" :labelTitle="callPlaceholder" />
                      </client-only>
                    </label>
                    <h4 class="Login-form-call-title">Ne Zaman Aranmak İstersiniz</h4>
                    <div class="Login-form-call mb-2">
                      <div class="Login-form-call-item">
                        <input type="radio" name="loginFormCallItem" checked id="loginFormCallInput">
                        <label for="loginFormCallInput">
                          <span class="Login-form-call-item-dot"></span>
                          <p><span>HEMEN</span>5dk içinde arayabiliriz.</p>
                        </label>
                      </div>
                      <div class="Login-form-call-item">
                        <input type="radio" name="loginFormCallItem" checked id="loginFormCallInput2">
                        <label for="loginFormCallInput2">
                          <span class="Login-form-call-item-dot"></span>
                          <p><span>ÖZEL ZAMAN</span>Dilediğiniz zaman arayabiliriz.</p>
                        </label>
                      </div>
                    </div>
                    <p class="Login-form-alert  mt-2 text-danger text-sm phone-alert"></p>
                    <label for="gizlilik" class="Login-form-item Login-form-item-check">
                      <input type="checkbox" id="gizlilik">
                      <span></span>
                      <p><a data-bs-toggle="modal" href="#kullanimModal">Kullanım Şartları</a> ve <a href="">Gizlilik
                          bildirimini</a> kabul ediyorum.
                        Kişisel Verilerin Korunması ve <a href="">Gizlilik Politikasını</a> okudum.</p>
                    </label>
                    <label for="firsat" class="Login-form-item Login-form-item-check">
                      <input type="checkbox" id="firsat">
                      <span></span>
                      <p><a href="">Fırsat ve kampanyalardan haberdar olmak istiyorum.</a> </p>
                    </label>
                    <button type="submit" class="Login-form-button mt-2">GÖNDER</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Fav Modal -->
      <div class="modal fade Login" id="favModal" tabindex="-1" aria-labelledby="favModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                class="icon-login-close"></i></button>
            <div class="Login-in">
              <div class="Login-left" style="background-image:url(/img/fav-bg.jpg)"></div>
              <div class="Login-right">
                <div class="Login-right-in">
                  <div class="Login-fav">
                    <img src="/img/fav-heart-big.svg" alt="">
                    <p class="Login-fav-text">
                      Beğendiğiniz tesisleri favorilere eklemek için lütfen üye olunuz eğer zaten üyeyseniz giriş
                      yapınız.
                    </p>
                    <div class="Login-buttons">
                      <button type="submit" class="Login-form-button mt-2">GÖNDER</button>
                      <button type="submit" class="Login-form-button Login-form-button-white mt-2">KAYIT OL</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Kullanım Şartları Modal -->
      <div class="modal fade Login" id="kullanimModal" tabindex="-1" aria-labelledby="kullanimModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                class="icon-login-close"></i></button>
            <div class="Login-text">
              <h2>Kullanım Şartları</h2>
              <div class="Login-text-in">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-theme-first" data-bs-dismiss="modal" aria-label="Close"><i
                  class="icon-arrow-left-2"></i>Geri Dön</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Gizlilik Bildirimi Modal -->
      <div class="modal fade Login" id="gizlilikModal" tabindex="-1" aria-labelledby="gizlilikModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                class="icon-login-close"></i></button>
            <div class="Login-text">
              <h2>Gizlilik Bildirimi</h2>
              <div class="Login-text-in">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-theme-first" data-bs-dismiss="modal" aria-label="Close"><i
                  class="icon-arrow-left-2"></i>Geri Dön</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Gizlilik Politikası Modal -->
      <div class="modal fade Login" id="gizlilikPolitikasiModal" tabindex="-1"
        aria-labelledby="gizlilikPolitikasiModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                class="icon-login-close"></i></button>
            <div class="Login-text">
              <h2>Gizlilik Politikası</h2>
              <div class="Login-text-in">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, totam inventore ducimus,
                  itaque in vero harum sequi reprehenderit minus similique rerum eligendi labore obcaecati sed tempora
                  dolorem, debitis vitae cupiditate!</p>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-theme-first" data-bs-dismiss="modal" aria-label="Close"><i
                  class="icon-arrow-left-2"></i>Geri Dön</button>
            </div>
          </div>
        </div>
      </div>

      <client-only>
      </client-only>
    </div>


    <filter-villa-component :selectedFilters="selectedFilters"></filter-villa-component>

    <section class="List">
      <div class="container">
        <div class="List-in">
          <h3>Fethiye Villa Kiralama </h3>
          <div class="List-img">
            <img src="/img/list.png" alt="">
          </div>
          <div class="List-text">
            <p>İslamlar kiralık villa seçenekleriyle son derece meşhur bir bölgedir. Dört bir yanı zeytin
              ağaçları ile çevrili olan bu şirin köy, Antalya tatilcilerinin her dönem ilgi odağındadır. Villa
              tatili ile doğa tatilini birleştiriyor olması bu ünün altında yatan en önemli nedenlerden
              biridir. Birbirinden güzel kiralık villa seçenekleriyle tatilciler konforlu bir konaklama imkanı
              yakalarlar. Bunun yanı sıra, villalarından dışarıya atacakları bir adım ile kendilerini doğa ile
              iç içe bulurlar.
              Hem lüksün hem de doğanın bir arada olması büyük bir avantajdır. Gün içerisinde doğa yürüyüşleri
              yapılabilir akşamları ise villanın keyfi sürülebilir olur. Tabii ki yaz tatili için gelen
              ziyaretçiler deniz manzaralı villalara daha büyük ilgi duyarlar. Öyle ki, günün her saatini
              denizin etkileyici görüntüsüne karşı yaşarlar. Bir deniz tatili için bu durum hemen hemen herkes
              tarafından istenilen bir durumdur.
              İslamlar bu açıdan da şanslıdır. İslamlar Köyü, çevrede yer alan bir birinden güzel koylara
              yakın mesafededir. Özellikle Kaş’ın kıymetli plajlarından olan Kaputaş ve Patara Plajı,
              İslamlar’a oldukça yakındır. Küçük bir araba yolculuğu ile denizin mükemmel serinliğine kavuşmak
              mümkündür. Antalya yaz sezonunda oldukça sıcak bir yer olduğu için denize yakınlık bu noktada
              ekstra daha önemlidir.
              Antalya’nın sıcak olması İslamlar kiralık villa bakanlar için bazı kategorileri daha da ön plana
              çıkarır. Özellikle denizden çok havuzda vakit geçirmeyi seven tatilciler havuzlu villa arayışına
              girerler. İslamlar havuzlu villalar veya İslamlar kapalı havuzlu villalar bu noktada devreye
              girmektedir. Kapalı havuzlu villalar özellikle sezon dışı dönemlerde tercih edilir. Bu sayede
              kişiler her zaman diledikleri gibi havuz keyfi yapabilirler. Hava soğuk olsa dahi kişiler
              diledikleri gibi havuzlarında yüzebilirler. Açık havuzlu villalar ise yaz tatili eğlencesine
              daha çok eğlence katan niteliktedir. Ailenin tüm üyeleri kendilerine özel olan havuzlarında doya
              doya yüzüp diledikleri gibi serinleyebilirler.</p>
          </div>
        </div>
        <div class="List-sss">
          <h3>Sıkça Sorulan Sorular </h3>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
                Nasıl rezervasyon yapabilirim ?
              </button>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi
                    yemeklerinizi pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası
                    hazırlayabilirsiniz.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi
                    yemeklerinizi pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası
                    hazırlayabilirsiniz.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
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
  </div>
</template>

<script>
import VSelect from "@alfsnd/vue-bootstrap-select";
import LoginModal from "@/components/modals/login-modal.vue";
import RegisterModal from "@/components/modals/register-modal.vue";


export default {
  name: 'DynamicVillaFilterPage',
  props: {
    selectedFilters: {type: Object, default: {}},
  },
  data() {
    return {
      phoneNumber: '',
      phoneNumberValid: false,
      callValues: [
        { value: 1, text: "Konaklama Problemi" },
        { value: 2, text: "Rezervasyon Problemi" },
        { value: 3, text: "Fatura İşlemleri" },
        { value: 4, text: "Ek Hizmetler" },
      ],
      callSubject: null,
      callPlaceholder: "Konu Seçiniz",
      disableDates: ['2023-02-21', '2023-02-22', '2023-02-23', '2023-02-24', '2023-02-24', '2023-02-26', '2023-02-27', '2023-02-28']
    }
  },
  components: {
    RegisterModal,
    LoginModal,
    VSelect,
  },
  methods: {
    onInput(phone, phoneObject) {
      setTimeout(() => {
        this.phoneNumberValid = phoneObject.valid;
        if (phone && phoneObject.country?.iso2 === 'TR' && !phoneObject.nationalNumber?.startsWith('5')) {
          this.phoneNumber = '5';
        }
      }, 50)
    },

  },

  watch: {

  },
  computed: {
    phoneProps() {
      return {
        enabledFlags: true,
        dropdownOptions: {
          showDialCodeInSelection: true,
          showDialCodeInList: true,
          showFlags: true,
        },
        inputOptions: {
          placeholder: "Telefon Numaranız",
          type: "tel",
        },
        mode: "international",
        validCharactersOnly: true,
      };
    },
  },
  mounted() {

  }
}
</script>
<style>
/* :deep() */
.vhd__datepicker__wrapper {
  background: none;
}

.vhd__datepicker__dummy-wrapper {
  border: none;
}

.vhd__datepicker__input {
  padding: 0;
  text-align: left;
}

.vhd__datepicker__input:first-child {
  background-position: 80px;
}</style>
