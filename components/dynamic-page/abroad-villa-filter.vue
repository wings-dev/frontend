<template>
  <div>

    <section class="Opportunity" style="background-image: url(/img/opportunity-back.svg);" v-if="opportunity">
      <div class="container">
        <div class="Opportunity-in">
          <div class="Opportunity-left">
            <div class="Opportunity-left-head">
              <i class="icon-opportunity"></i>
              <h3>Aylara göre Fırsatlar</h3>
            </div>

            <p>Bu aya özel toplam <span>179 fırsat villası</span> var. Fırsatı kaçırma, huzurlu bi tatili yakala!</p>
          </div>
          <div class="Opportunity-right">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-haziran-tab" data-bs-toggle="pill"
                  data-bs-target="#pills-haziran" type="button" role="tab" aria-controls="pills-haziran"
                  aria-selected="true">Haziran</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-temmuz-tab" data-bs-toggle="pill" data-bs-target="#pills-temmuz"
                  type="button" role="tab" aria-controls="pills-temmuz" aria-selected="false">Temmuz</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-agustos-tab" data-bs-toggle="pill" data-bs-target="#pills-agustos"
                  type="button" role="tab" aria-controls="pills-agustos" aria-selected="false">Ağustos</button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-haziran" role="tabpanel"
                aria-labelledby="pills-haziran-tab">
                <div class="Opportunity-list">
                  <nuxt-link to="/" class="Opportunity-list-item">
                    <div class="Opportunity-list-item-content">
                      <b>2</b>
                      <div class="Opportunity-list-item-content-in">
                        <span>GECE</span>
                        <p>Fırsatları</p>
                        <small>Temmuz</small>
                      </div>
                    </div>
                    <p class="Opportunity-list-item-count">
                      25 Fırsat <span>incele</span>
                    </p>
                  </nuxt-link>
                  <nuxt-link to="/" class="Opportunity-list-item passive">
                    <div class="Opportunity-list-item-content">
                      <b>3</b>
                      <div class="Opportunity-list-item-content-in">
                        <span>GECE</span>
                        <p>Fırsatları</p>
                        <small>Temmuz</small>
                      </div>
                    </div>
                    <div class="Opportunity-list-item-count">
                      <p>Tükendi</p>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="/" class="Opportunity-list-item">
                    <div class="Opportunity-list-item-content">
                      <b>4</b>
                      <div class="Opportunity-list-item-content-in">
                        <span>GECE</span>
                        <p>Fırsatları</p>
                        <small>Temmuz</small>
                      </div>
                    </div>
                    <p class="Opportunity-list-item-count">
                      2 Fırsat <span>incele</span>
                    </p>
                  </nuxt-link>
                  <nuxt-link to="/" class="Opportunity-list-item">
                    <div class="Opportunity-list-item-content">
                      <b>5</b>
                      <div class="Opportunity-list-item-content-in">
                        <span>GECE</span>
                        <p>Fırsatları</p>
                        <small>Temmuz</small>
                      </div>
                    </div>
                    <p class="Opportunity-list-item-count">
                      5 Fırsat <span>incele</span>
                    </p>
                  </nuxt-link>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-temmuz" role="tabpanel" aria-labelledby="pills-temmuz-tab">
                <div class="Opportunity-list">
                  <nuxt-link to="/" class="Opportunity-list-item">
                    <div class="Opportunity-list-item-content">
                      <b>2</b>
                      <div class="Opportunity-list-item-content-in">
                        <span>GECE</span>
                        <p>Fırsatları</p>
                        <small>Temmuz</small>
                      </div>
                    </div>
                    <p class="Opportunity-list-item-count">
                      25 Fırsat <span>incele</span>
                    </p>
                  </nuxt-link>
                  <nuxt-link to="/" class="Opportunity-list-item passive">
                    <div class="Opportunity-list-item-content">
                      <b>3</b>
                      <div class="Opportunity-list-item-content-in">
                        <span>GECE</span>
                        <p>Fırsatları</p>
                        <small>Temmuz</small>
                      </div>
                    </div>
                    <div class="Opportunity-list-item-count">
                      <p>Tükendi</p>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="/" class="Opportunity-list-item">
                    <div class="Opportunity-list-item-content">
                      <b>4</b>
                      <div class="Opportunity-list-item-content-in">
                        <span>GECE</span>
                        <p>Fırsatları</p>
                        <small>Temmuz</small>
                      </div>
                    </div>
                    <p class="Opportunity-list-item-count">
                      2 Fırsat <span>incele</span>
                    </p>
                  </nuxt-link>
                  <nuxt-link to="/" class="Opportunity-list-item">
                    <div class="Opportunity-list-item-content">
                      <b>5</b>
                      <div class="Opportunity-list-item-content-in">
                        <span>GECE</span>
                        <p>Fırsatları</p>
                        <small>Temmuz</small>
                      </div>
                    </div>
                    <p class="Opportunity-list-item-count">
                      5 Fırsat <span>incele</span>
                    </p>
                  </nuxt-link>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-agustos" role="tabpanel" aria-labelledby="pills-agustos-tab">
                <div class="Opportunity-list">
                  <nuxt-link to="/" class="Opportunity-list-item">
                    <div class="Opportunity-list-item-content">
                      <b>2</b>
                      <div class="Opportunity-list-item-content-in">
                        <span>GECE</span>
                        <p>Fırsatları</p>
                        <small>Temmuz</small>
                      </div>
                    </div>
                    <p class="Opportunity-list-item-count">
                      25 Fırsat <span>incele</span>
                    </p>
                  </nuxt-link>
                  <nuxt-link to="/" class="Opportunity-list-item passive">
                    <div class="Opportunity-list-item-content">
                      <b>3</b>
                      <div class="Opportunity-list-item-content-in">
                        <span>GECE</span>
                        <p>Fırsatları</p>
                        <small>Temmuz</small>
                      </div>
                    </div>
                    <div class="Opportunity-list-item-count">
                      <p>Tükendi</p>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="/" class="Opportunity-list-item">
                    <div class="Opportunity-list-item-content">
                      <b>4</b>
                      <div class="Opportunity-list-item-content-in">
                        <span>GECE</span>
                        <p>Fırsatları</p>
                        <small>Temmuz</small>
                      </div>
                    </div>
                    <p class="Opportunity-list-item-count">
                      2 Fırsat <span>incele</span>
                    </p>
                  </nuxt-link>
                  <nuxt-link to="/" class="Opportunity-list-item">
                    <div class="Opportunity-list-item-content">
                      <b>5</b>
                      <div class="Opportunity-list-item-content-in">
                        <span>GECE</span>
                        <p>Fırsatları</p>
                        <small>Temmuz</small>
                      </div>
                    </div>
                    <p class="Opportunity-list-item-count">
                      5 Fırsat <span>incele</span>
                    </p>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="highlight-section  pt-5 pb-4 mt-n5" v-if="highlights">
      <div class="container">
        <div class="row pt-4 pb-md-2">
          <div class="note-box col-12 col-lg-12 pe-lg-5">
            <h1 class="highlight-section-title">Fethiye Kiralık Villa</h1>
            <p class="highlight-section-desc" :class="{ active: isExpanded }" v-html="content">
            </p>

            <div class="highlight-section-desc-more-button read-more-button" :class="{ active: isExpanded }"
              @click="isExpanded = !isExpanded"><i class="readmore"></i> {{ !isExpanded ? 'TAMAMINI OKU' : 'DAHA AZ OKU'
              }}</div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mt-2 d-none">
      <button type="button" @click="this.showLoginModal">GİRİŞ YAP MODAL</button>
      <button type="button" @click="this.showRegisterModal">KAYIT MODAL</button>

      <button type="button" data-bs-toggle="modal" data-bs-target="#callModal">SİZİ ARAYALIM MODAL</button>
      <button type="button" data-bs-toggle="modal" data-bs-target="#favModal">FAV MODAL</button>

      <button type="button" data-bs-toggle="modal" data-bs-target="#kullanimModal">Kullanım şartları</button>
      <button type="button" data-bs-toggle="modal" data-bs-target="#reservationSuccessModal">başarılı</button>

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

      <!-- Kullanım Şartları Modal -->
      <div class="modal fade Login" id="reservationSuccessModal" tabindex="-1"
        aria-labelledby="reservationSuccessModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                class="icon-login-close"></i></button>
            <div class="Login-success">
              <nuxt-img src="/img/success-check.svg" alt="" loading="lazy" ></nuxt-img>
              <h3>Rezervasyon Talebi Alındı</h3>
              <h4>Ödeme yaptığınız takdirde adınıza rezerve edilecektir.</h4>
              <p>Satış temsilcilerimiz size en kısa sürede dönüş yapacaktır.</p>
            </div>
          </div>
        </div>
      </div>

      <client-only>
      </client-only>
    </div>


    <!-- <filter-abroad-villa-component :selectedFilters="selectedFilters"></filter-abroad-villa-component>-->

    <filter-villa-component :selectedFilters="selectedFilters" :opportunity="opportunity" :world="1"></filter-villa-component>

    <section class="highlight-section  pt-5 pb-4" v-if="highlights">
      <div class="container">
        <div class="row pt-4 pb-md-2">
          <div class="note-box col-12 col-lg-12 pe-lg-5">
            <h1 class="highlight-section-title">Fethiye Kiralık Villa</h1>
            <p class="highlight-section-desc" :class="{ active: isExpanded2 }" v-html="content">
            </p>
            <div class="highlight-section-desc-more-button read-more-button" :class="{ active: isExpanded2 }"
              @click="isExpanded2 = !isExpanded2"><i class="readmore"></i> {{ !isExpanded2 ? 'TAMAMINI OKU' : 'DAHA AZ OKU' }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="List" v-if="highlights">
      <div class="container">
        <div class="List-sss">
          <h3>En çok sorulan sorular </h3>
          <div class="accordion" id="Faq">
            <div class="accordion-item">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1"
                aria-expanded="false" aria-controls="faq1">
                Nasıl rezervasyon yapabilirim ?
              </button>
              <div id="faq1" class="accordion-collapse collapse " data-bs-parent="#Faq">
                <div class="accordion-body">
                  <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi
                    pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2"
                aria-expanded="false" aria-controls="faq2">
                Kaç Kişi Konaklayabiliyoruz ?
              </button>
              <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#Faq">
                <div class="accordion-body">
                  <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi
                    pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3"
                aria-expanded="false" aria-controls="faq3">
                Yemek servisi hizmetiniz var mı ?
              </button>
              <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#Faq">
                <div class="accordion-body">
                  <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi
                    pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4"
                aria-expanded="false" aria-controls="faq4">
                Yemek servisi hizmetiniz var mı ?
              </button>
              <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#Faq">
                <div class="accordion-body">
                  <p>Yemek servisi hizmetimiz bulunmamaktadır. Villalarımıza ait mutfaklarda kendi yemeklerinizi
                    pişirebilir,kendi ellerinizle güzel bir kahvaltı sofrası hazırlayabilirsiniz.</p>
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
import { mapActions } from "vuex";


export default {
  name: 'DynamicAbroadVillaFilterPage',
  props: {
    selectedFilters: { type: Object, default: {} },
    highlights: { type: Boolean, default: false },
    opportunity: { type: Boolean, default: false }
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
      disableDates: ['2023-02-21', '2023-02-22', '2023-02-23', '2023-02-24', '2023-02-24', '2023-02-26', '2023-02-27', '2023-02-28'],
      isExpanded: false,
      isExpanded2: false,
      content: `Muğla’nın tatil cenneti Fethiye, her yıl yüz binlerce kişinin tercih ettiği, harika doğası ve
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
                  Fethiye’de, kalabalıktan uzakta, sakin ve keyifli bir tatil mümkün.`
    }
  },
  components: {
    RegisterModal,
    LoginModal,
    VSelect,

  },
  methods: {
    ...mapActions(['showLoginModal', 'hideLoginModal', 'showRegisterModal', 'hideRegisterModal']),
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


  },

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
}

.arrow-down {
  margin-top: 2px !important;
}

.v-select {
  height: 100% !important;
}

.v-select-toggle {
  align-items: center;
}

.block-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 24px 20px;
  background-color: skyblue;
  border-radius: 8px;
}

.block-content__preview {
  /* default line-height is 24px */
  max-height: calc(24px * 4);
  overflow: hidden;
  color: white;
}

.block-content__paragraph {
  color: white;
  overflow: hidden;
  transition: all 250ms ease-out;
}

.block-content__paragraph.block-content__paragraph--is-expanded {
  overflow: initial;
}

.block-content__button {
  color: white;
  text-decoration: underline;
  align-self: flex-end;
}
</style>
