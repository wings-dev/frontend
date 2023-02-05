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
      <button type="button" data-bs-toggle="modal" data-bs-target="#loginModal">GİRİŞ YAP MODAL</button>
      <button type="button" data-bs-toggle="modal" data-bs-target="#loginCodeModal">KOD DOĞRULAMA MODAL</button>
      <button type="button" data-bs-toggle="modal" data-bs-target="#signupModal">KAYIT MODAL</button>
      <button type="button" data-bs-toggle="modal" data-bs-target="#callModal">SİZİ ARAYALIM MODAL</button>


      <!-- Giriş Modal -->
      <div class="modal fade Login" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                class="icon-login-close"></i></button>
            <div class="Login-in">
              <div class="Login-left" style="background-image:url('/cdn/img/login-bg.jpg')"></div>
              <div class="Login-right">
                <div class="Login-right-in">
                  <h2><b>MÜŞTERİ </b> GİRİŞİ</h2>
                  <p>Lütfen bir giriş yöntemi seçiniz.</p>
                  <span>Yurtdışında yaşayan müşterilerimizin <u>e-posta</u> ile giriş yapması gerekmektedir.</span>
                  <form action="" class="Login-form">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <input type="radio" name="loginFormType" checked id="loginFormRadio" data-bs-toggle="pill"
                          data-bs-target="#loginFormPhoneContent">
                        <label for="loginFormRadio">
                          <i class="icon-login-phone"></i>
                          <span>Telefon ile giriş yap</span>
                        </label>
                      </li>
                      <li class="nav-item" role="presentation">
                        <input type="radio" name="loginFormType" id="loginFormRadio2" data-bs-toggle="pill"
                          data-bs-target="#loginFormMailContent">
                        <label for="loginFormRadio2">
                          <i class="icon-login-mail"></i>
                          <span>E-posta ile giriş yap</span>
                        </label>
                      </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                      <div class="tab-pane fade show active" role="tabpanel" id="loginFormPhoneContent">
                        <label for="" class="Login-form-item Login-form-item-tr">
                          <i class="icon-flag-tr"></i>
                          <input type="text" placeholder="+90" value="+90" id="inputTR">
                        </label>
                        <p class="Login-form-alert  mt-2 text-danger text-sm phone-alert"></p>
                        <button type="submit" class="Login-form-button">GÖNDER</button>
                        <p class="Login-form-signup">Hesabın yok mu? <a href="">Hemen Üye Ol!</a></p>
                      </div>
                      <div class="tab-pane fade" role="tabpanel" id="loginFormMailContent">
                        <label for="" class="Login-form-item Login-form-item-tr">
                          <input type="text" placeholder="E-mail adresiniz" value="" id="mailInput">
                        </label>
                        <p class="Login-form-alert  mt-2 text-danger text-sm mail-alert"></p>
                        <button type="submit" class="Login-form-button">GÖNDER</button>
                        <p class="Login-form-signup">Hesabın yok mu? <a href="">Hemen Üye Ol!</a></p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Doğrulama Kodu Modal -->

      <div class="modal fade Login" id="loginCodeModal" tabindex="-1" aria-labelledby="loginCodeModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                class="icon-login-close"></i></button>
            <div class="Login-in">
              <div class="Login-left" style="background-image:url('/cdn/img/login-bg.jpg')"></div>
              <div class="Login-right">
                <div class="Login-right-in">
                  <h2><b>DOĞRULAMA </b> KODU</h2>
                  <span>Lütfen telefon numaranıza gelen <u>4 haneli</u> giriş kodunu giriniz.</span>
                  <form action="" class="Login-form">
                    <fieldset name='number-code' data-number-code-form>
                      <input class="number-code" type="number" min='0' max='9' name='number-code-0'
                        data-number-code-input='0' required />
                      <input class="number-code" type="number" min='0' max='9' name='number-code-1'
                        data-number-code-input='1' required />
                      <input class="number-code" type="number" min='0' max='9' name='number-code-2'
                        data-number-code-input='2' required />
                      <input class="number-code" type="number" min='0' max='9' name='number-code-3'
                        data-number-code-input='3' required />
                    </fieldset>
                    <p class="Login-code-info" data-time="50"><b>00:30</b> Tekrar talep etmek için beklemeniz gereken
                      süre
                      <a href="">Yeni Doğrulama Kodu Gönder</a>
                    </p>
                    <button type="submit" class="Login-form-button mt-1">GÖNDER</button>
                    <p class="Login-form-signup">Hesabın yok mu? <a href="">Hemen Üye Ol!</a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Kayıt Modal -->

      <div class="modal fade Login" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                class="icon-login-close"></i></button>
            <div class="Login-in">
              <div class="Login-left" style="background-image:url('/cdn/img/login-bg.jpg')"></div>
              <div class="Login-right">
                <div class="Login-right-in">
                  <h2><b>KAYIT </b> OL</h2>
                  <form action="" class="Login-form">
                    <label for="" class="Login-form-item mb-2">
                      <input type="text" placeholder="İsim Soyisim" value="">
                    </label>
                    <label for="" class="Login-form-item mb-2">
                      <input type="text" placeholder="E-mail Adresiniz" value="" id="mailInput">
                    </label>
                    <p class="Login-form-alert  mt-2 text-danger text-sm mail-alert mail-alert-signup"></p>
                    <label for="" class="Login-form-item Login-form-item-tr">
                      <input type="tel" required="required" id="phone" name="phone" class="" autocomplete="off"
                        placeholder="Telefon Numaranız">
                    </label>
                    <p class="Login-form-alert  mt-2 text-danger text-sm phone-alert"></p>
                    <label for="gizlilik" class="Login-form-item Login-form-item-check">
                      <input type="checkbox" id="gizlilik">
                      <span></span>
                      <p><a data-bs-toggle="modal" href="#kullanimModal">Kullanım Şartları</a> ve <a
                          data-bs-toggle="modal" href="#gizlilikModal">Gizlilik bildirimini</a> kabul ediyorum.
                        Kişisel Verilerin Korunması ve <a data-bs-toggle="modal"
                          href="#gizlilikPolitikasiModal">Gizlilik Politikasını</a> okudum.</p>
                    </label>
                    <label for="firsat" class="Login-form-item Login-form-item-check">
                      <input type="checkbox" id="firsat">
                      <span></span>
                      <p><a href="">Fırsat ve kampanyalardan haberdar olmak istiyorum.</a> </p>
                    </label>
                    <button type="submit" class="Login-form-button mt-2">KAYIT OL</button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sizi Arayalım Modal -->
      <div class="modal fade Login" id="callModal" tabindex="-1" aria-labelledby="callModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                class="icon-login-close"></i></button>
            <div class="Login-in">
              <div class="Login-left" style="background-image:url('/cdn/img/login-bg.jpg')"></div>
              <div class="Login-right">
                <div class="Login-right-in">
                  <h2><b>SİZİ </b> ARAYALIM</h2>
                  <form action="" class="Login-form">
                    <label for="" class="Login-form-item mb-2">
                      <input type="text" placeholder="İsim Soyisim" value="">
                    </label>
                    <label for="" class="Login-form-item mb-2">
                      <input type="text" placeholder="E-mail Adresiniz" value="" id="mailInput">
                    </label>
                    <p class="Login-form-alert  mt-2 text-danger text-sm mail-alert mail-alert-signup"></p>
                    <label for="" class="Login-form-item Login-form-item-tr mb-2">
                      <input type="tel" required="required" id="phone" name="phone" class="" autocomplete="off"
                        placeholder="Telefon Numaranız">
                    </label>
                    <label for="" class="Login-form-item Login-form-item-select mb-3">
                      <select class="selectpicker " id="loginFormSubject">
                        <option value="0" selected="selected">Konu Seçiniz</option>
                        <option value="1">Z-A</option>
                        <option value="2">A-z</option>
                      </select>
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

      <!-- Kullanım Şartları Modal -->
      <div class="modal fade Login" id="kullanimModal" tabindex="-1" aria-labelledby="kullanimModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
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
              <button class="btn btn-theme-first" data-bs-target="#signupModal" data-bs-toggle="modal"
                data-bs-dismiss="modal">Geri Dön</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Gizlilik Bildirimi Modal -->
      <div class="modal fade Login" id="gizlilikModal" tabindex="-1" aria-labelledby="gizlilikModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
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
              <button class="btn btn-theme-first" data-bs-target="#signupModal" data-bs-toggle="modal"
                data-bs-dismiss="modal">Geri Dön</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Gizlilik Politikası Modal -->
      <div class="modal fade Login" id="gizlilikPolitikasiModal" tabindex="-1"
        aria-labelledby="gizlilikPolitikasiModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
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
              <button class="btn btn-theme-first" data-bs-target="#signupModal" data-bs-toggle="modal"
                data-bs-dismiss="modal">Geri Dön</button>
            </div>
          </div>
        </div>
      </div>

    </div>

    <section class="Filter">
      <div class="container">
        <div class="Filter-in">
          <div class="Filter-left Filters">
            <div class="Filter-left-head">
              <h4>Gelişmiş Arama</h4>
              <button type="button" class="Search-clear" onclick="filterClear()">Temizle</button>
              <button type="button" class="Search-filter-close" id="mobileFilterClose"><i
                  class="icon-search-close"></i></button>
            </div>
            <div class="Filters-search mobile">
              <label for="">
                <i class="icon-search-new"></i>
                <input type="search" placeholder="Özellik arayın" onkeyup="destinationsFilter(this)">
              </label>
            </div>
            <div class="Filter-left-in">
              <div class="Filters-item Filters-item-notfound">
                <p class="Filters-item-notfound-text"><i class="icon-filter"></i>Sonuç bulunamadı</p>
              </div>

              <filter-item-checkbox-component title="BÖLGE" filterInputPlaceholder="Bölge Arayın"
                :checkboxes="destinations" :hideTitleBorder="true" @updated="destinations = $event"
                @selectedObjects="selectedDestintions = $event"></filter-item-checkbox-component>

              <filter-item-checkbox-component title="TESİS TİPİ" :checkboxes="amenites.facilityTypes"
                @updated="amenites.facilityTypes = $event"></filter-item-checkbox-component>

              <filter-price-between-component @min_price="min_price = $event"
                @max_price="max_price = $event"></filter-price-between-component>

              <filter-item-checkbox-component title="TESİS KONSEPTİ" :checkboxes="amenites.facilityConcepts"
                @updated="amenites.facilityConcepts = $event"></filter-item-checkbox-component>

              <filter-item-checkbox-component title="ÖNE ÇIKAN ÖZELLİKLER" :checkboxes="amenites.highlights"
                @updated="amenites.highlights = $event"></filter-item-checkbox-component>

              <filter-item-checkbox-component title="OLANAKLAR" :checkboxes="amenites.facilities"
                @updated="amenites.facilities = $event"></filter-item-checkbox-component>

            </div>

            <div class="Filters-button" type="button" @click="filter">Filtele</div>
          </div>
          <div class="Filter-right">
            <div class="Filter-right-head">
              <div class="Filter-right-head-info">
                <i class="icon-list"></i>
                <p>{{ villas.length }} villa listeleniyor</p>
              </div>
              <div class="Filter-right-head-buttons">

                <div class="Filter-right-head-buttons-item">
                  <span class="Filter-right-head-buttons-item-title">Sırala:</span>
                  <select class="selectpicker " id="v_filter">
                    <option value="0" selected="selected"> Fiyata Göre Artan</option>
                    <option value="1">Z-A</option>
                    <option value="2">A-z</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="Filter-right-selected" style="">
              <div class="Filter-right-selected-in">

                <a v-for="destination in selectedDestintions" href="#" class="Filter-right-selected-item"
                  id="it-1">Bölge:{{ destination.text }}<i class="icon-search-close"
                    @click="unselectDestination(destination)"></i></a>
                <!--
                <a v-for="facilityType in amenites.facilityTypes" href="#" class="Filter-right-selected-item" id="it-1">Tesis Tipi:{{facilityType.text}}<i class="icon-search-close"></i></a>
                <a v-for="facilityConcept in amenites.facilityConcepts" href="#" class="Filter-right-selected-item" id="it-1">Konsept:{{facilityConcept.text}}<i class="icon-search-close"></i></a>
                <a v-for="highlight in amenites.highlights" href="#" class="Filter-right-selected-item" id="it-1">Özellik:{{highlight.text}}<i class="icon-search-close"></i></a>
                <a v-for="facility in amenites.facilities" href="#" class="Filter-right-selected-item" id="it-1">Olanak:{{facility.text}}<i class="icon-search-close"></i></a>
-->

                <button type="button" id="Fetures_clear" v-if="selectedDestintions.length > 0">Temizle</button>
              </div>
            </div>




            <div class="F_villa ">

              <div class="F_villa-item" v-for="villa in villas">
                <div class="F_villa-item-img ">


                  <!-- <div class="swiper villa-list-slider" >
                    <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for="image in villa.preview_image">
                        <img class="lazyload" :src="image.preview_url"
                             :data-src="image.preview_url"
                             :data-srcset="image.responsive_url"/>
                      </div>
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                  </div>  -->

                  <swiper class=" swiper villa-list-slider" :options="swiperOptions">
                    <div class="swiper-slide" v-for="image in villa.preview_image">
                      <img class="lazyload" :src="image.preview_url"
                             :data-src="image.preview_url"
                             :data-srcset="image.responsive_url"/>
                    </div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                  </swiper>


                </div>
                <div class="F_villa-item-right">
                  <div class="F_villa-item-head">
                    <div class="F_villa-item-head-name">
                      <span>Tesis Kodu</span>
                      <a href="">{{ villa.name }}</a>
                      <div class="F_villa-item-head-name-star">
                        <i class="icon-star active"></i>
                        <i class="icon-star active"></i>
                        <i class="icon-star active"></i>
                        <i class="icon-star"></i>
                        <i class="icon-star"></i>
                        <p>4.9</p>
                      </div>
                    </div>
                    <div class="F_villa-item-head-location">
                      <i class="icon-name-location"></i>
                      <div class="F_villa-item-head-location-text">
                        <p>KALKAN
                          <span>{{ villa.country[0].toUpperCase() + villa.country.substring(1) }} /
                            {{ villa.city[0].toUpperCase() + villa.city.substring(1) }} </span>
                        </p>
                      </div>
                    </div>
                    <div class="F_villa-item-head-price F_villa-item-head-price-promotion">
                      <div class="F_villa-item-head-price-in">
                        <b>{{ villa.prices.min_price.price }}₺</b>
                        <p>‘den başlayan fiyatlar</p>
                      </div>

                      <span>GECELİK</span>
                    </div>
                  </div>
                  <div class="F_villa-item-info">
                    <div class="F_villa-item-info-item">
                      <i class="icon-user-new"></i>
                      <span>{{ villa.max_adult }} Kişilik</span>
                    </div>
                    <div class="F_villa-item-info-item">
                      <i class="icon-bed-new"></i>
                      <span>{{ villa.bedroom }} Yatak Odası</span>
                    </div>
                    <div class="F_villa-item-info-item">
                      <i class="icon-shower-new"></i>
                      <span>{{ villa.bathrooms }} Banyo</span>
                    </div>
                  </div>
                  <div class="F_villa-item-bottom">
                    <div class="F_villa-item-features">
                      <h6>Öne çıkan özellikleri</h6>
                      <div class="F_villa-item-features-in">
                        <p class="F_villa-item-features-item">Jakuzi</p>
                        <p class="F_villa-item-features-item">Deniz Manzaralı</p>
                        <p class="F_villa-item-features-item">Merkeze Yakın</p>
                        <p class="F_villa-item-features-item">Denize Yakın</p>
                        <p class="F_villa-item-features-item">Kapalı Otopark</p>
                        <p class="F_villa-item-features-item F_villa-item-features-more"><a href="" class="">Tümünü
                            Gör</a></p>
                      </div>

                    </div>
                    <a href="" class="F_villa-item-show">Villayı İncele</a>
                  </div>
                </div>
              </div>

              <div
                class="holiday-banner bg-light text-white position-relative rounded-lg overflow-hidden d-flex py-3 py-sm-4 ps-3 ps-sm-4 ps-xl-5 pe-3 pe-sm-4 my-4">
                <img src="/cdn/img/spacer.gif" data-src="/cdn/uploads/holiday-banner.jpg" alt=""
                  class="banner-image lazy cover flex-shrink-0 position-absolute top-0 start-0 w-100 h-100">
                <div class="d-flex flex-column position-relative ls-05 pt-3">
                  <span class="fs-6 fw-medium lh-1">+1259 Seçenek ile</span>
                  <span class="fs-6 fw-medium lh-1">Konaklamanın en keyifli halleri</span>
                  <strong class="big-title fs-1 fw-bold lh-sm d-block mt-n1">OtelBnb’de</strong>
                </div>
                <svg class="align-self-end ms-auto" width="33px" height="36px" viewBox="0 0 14 15" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="VillaListeleme" transform="translate(-626.000000, -202.000000)" fill="#ffffff">
                      <g id="Group" transform="translate(626.000000, 202.000000)">
                        <path
                          d="M14,13.3334991 C14,14.2539193 13.2166932,15 12.25,15 C11.2836548,15 10.5,14.2539193 10.5,13.3334991 C10.5,12.4130788 11.2836548,11.6666667 12.25,11.6666667 C13.2166932,11.6666667 14,12.4130788 14,13.3334991"
                          id="Fill-13"></path>
                        <path
                          d="M6.12867316,9.20434506 C4.17402549,9.20434506 2.58538231,7.69131915 2.58538231,5.8369566 C2.58538231,3.97534751 4.17402549,2.46257148 6.12867316,2.46257148 C8.07544978,2.46257148 9.66435532,3.97534751 9.66435532,5.8369566 C9.66435532,7.69131915 8.07544978,9.20434506 6.12867316,9.20434506 M6.12867316,0 C2.74122939,0 0,2.61050069 0,5.8369566 C0,9.0559161 2.74122939,11.6666667 6.12867316,11.6666667 C9.50850825,11.6666667 12.25,9.0559161 12.25,5.8369566 C12.25,2.61050069 9.50850825,0 6.12867316,0"
                          id="Fill-15"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>

            </div>

            <nav aria-label="..." class="my-3">
              <ul class="pagination d-flex flex-wrap justify-content-center align-items-center">
                <li class="page-item me-2 me-sm-3 mb-1">
                  <a href="#!"
                    class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary bg-theme-light-2">
                    <svg width="7px" height="11px" viewBox="0 0 7 11" version="1.1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="VillaListeleme" transform="translate(-860.000000, -2875.000000)" fill="#AFAFB6"
                          fill-rule="nonzero">
                          <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                            <g id="right-arrow-(3)-copy"
                              transform="translate(26.954957, 19.166042) scale(-1, 1) translate(-26.954957, -19.166042) translate(23.919953, 14.000000)">
                              <path
                                d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,0 0.90762,0 C0.756252,0 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                                id="Path"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
                <li class="page-item me-2 me-sm-3 mb-1">
                  <a href="#!"
                    class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">1</a>
                </li>
                <li class="page-item me-2 me-sm-3 mb-1" aria-current="page">
                  <a href="#!"
                    class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary active">2</a>
                </li>
                <li class="page-item me-2 me-sm-3 mb-1">
                  <a href="#!"
                    class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">3</a>
                </li>
                <li class="page-item me-2 me-sm-3 mb-1">
                  <svg width="23px" height="5px" viewBox="0 0 23 5" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="VillaListeleme" transform="translate(-1109.000000, -2877.000000)" fill="#AFAFB6">
                        <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                          <g id="Group-16" transform="translate(272.000000, 16.000000)">
                            <circle id="Oval" cx="2.5" cy="2.5" r="2.5"></circle>
                            <circle id="Oval-Copy" cx="11.5" cy="2.5" r="2.5"></circle>
                            <circle id="Oval-Copy-2" cx="20.5" cy="2.5" r="2.5"></circle>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </li>
                <li class="page-item me-2 me-sm-3 mb-1">
                  <a href="#!"
                    class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">14</a>
                </li>
                <li class="page-item me-2 me-sm-3 mb-1" aria-current="page">
                  <a href="#!"
                    class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">15</a>
                </li>
                <li class="page-item me-2 me-sm-3 mb-1">
                  <a href="#!"
                    class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">16</a>
                </li>
                <li class="page-item me-2 me-sm-3 mb-1">
                  <a href="#!"
                    class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary bg-theme-light-2">
                    <svg width="7px" height="11px" viewBox="0 0 7 11" version="1.1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="VillaListeleme" transform="translate(-1374.000000, -2875.000000)" fill="#AFAFB6"
                          fill-rule="nonzero">
                          <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                            <g id="Group-19" transform="translate(514.000000, 0.000000)">
                              <g id="right-arrow-(3)" transform="translate(23.010038, 14.000000)">
                                <path
                                  d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,0 0.90762,0 C0.756252,0 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                                  id="Path"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </section>

    <section class="List">
      <div class="container">
        <div class="List-in">
          <h3>Fethiye Villa Kiralama </h3>
          <div class="List-img">
            <img src="cdn/img/list.png" alt="">
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


export default {
  name: "FilterVillaComponent",
  data() {
    return {
      current_page: 1,
      villas: [],
      min_price: null,
      max_price: null,
      selectedDestintions: [],
      destinations: [
        {
          text: "Antalya",
          code: 0,
          selected: false,
          children: [
            {
              text: "Kaş",
              code: 2,
              selected: false,
              children: [
                {
                  text: "Kalkan",
                  code: 1,
                  selected: false,
                }
              ]
            }
          ]
        },
        {
          text: "Çavdır",
          code: 0,
          selected: false,
          children: [
            {
              text: "Fethiye",
              code: 6,
              selected: false,
            },
            {
              text: "Marmaris",
              code: 0,
              selected: false,
            }
          ]
        }
      ],
      amenites: {
        facilityTypes: [
          {
            text: "Villa",
            code: "villa",
            selected: false,
          },
          {
            text: "Ev",
            code: "ev",
            selected: false,
          },
          {
            text: "Suite",
            code: "suite",
            selected: false,
          },
          {
            text: "Dubleks",
            code: "dubleks",
            selected: false,
          },
          {
            text: "Bungalov",
            code: "bungalov",
            selected: false,
          },
        ],
        facilityConcepts: [
          {
            text: "Deniz manzaralı villa ve evler",
            code: "Deniz manzaralı villa ve evler",
            selected: false,
          },
          {
            text: "Merkezi konumdaki evler",
            code: "Merkezi konumdaki evler",
            selected: false,
          },
          {
            text: "Lüks tatil villaları",
            code: "Lüks tatil villaları",
            selected: false,
          },
          {
            text: "Lüks tatil villaları",
            code: "Lüks tatil villaları",
            selected: false,
          },
          {
            text: "Muhafazakar villa",
            code: "Muhafazakar villa",
            selected: false,
          },
        ],
        highlights: [
          {
            text: "Özel Havuz",
            code: "Şezlong",
            selected: false,
          },
          {
            text: "Şezlong",
            code: "Şezlong",
            selected: false,
          },
          {
            text: "Ortak Havuz",
            code: "Ortak Havuz",
            selected: false,
          },
          {
            text: "Isıtmalı Havuz",
            code: "Isıtmalı Havuz",
            selected: false,
          },
          {
            text: "Kapalı Havuz",
            code: "Kapalı Havuz",
            selected: false,
          },
        ],
        facilities: [
          {
            text: "Çamaşır Makinesi",
            code: "Çamaşır Makinesi",
            selected: false,
          },
          {
            text: "Hamam",
            code: "Hamam",
            selected: false,
          },
          {
            text: "Sauna",
            code: "Sauna",
            selected: false,
          },
          {
            text: "Küvetli Banyo",
            code: "Küvetli Banyo",
            selected: false,
          },
          {
            text: "Fırın",
            code: "Fırın",
            selected: false,
          },
        ],
      },
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
      }
    }
  },
  mounted() {
    this.filter();
  },
  computed: {
    combinedSelectedAmenites() {
      return [].concat(
        this.amenites.facilityConcepts,
        this.amenites.facilityTypes,
        this.amenites.facilities,
        this.amenites.highlights
      );
    },
  },
  methods: {
    filter() {
      let data = {
        destination: this.selectedDestintions.map(destination => destination.code),
        amenites: this.combinedSelectedAmenites.map(destination => destination.code),
        min_price: this.min_price,
        max_price: this.max_price,
      }
      // data = {}; // TODO filtre kodları düzeldiğinde kalkacak
      this.$axios.post("/api/website/property?api_token=123456", data).then(response => {
        this.villas = response.data.data;
      }).catch(err => console.log(err));
    },
    unselectDestination(d, destinationArray) {
      // TODO burası hatalı çalışıyor çözülecek
      let destinations = destinationArray || this.destinations;
      return destinations.map(destination => {
        if (destination.code === d.code) {
          return {
            ...destination,
            selected: false
          };
        }
        if (destination.children && destination.children.length > 0) {
          destination.children = this.unselectDestination(d, destination.children);
        }
        return destination;
      });
    }
  }
}
</script>

<style scoped>

</style>
