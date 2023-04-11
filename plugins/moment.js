import Vue from 'vue';
import moment from 'moment';
import 'moment/locale/tr'; // Türkçe dil dosyasını içeri aktarıyoruz
import 'moment/locale/en-gb'; // İngilizce (Birleşik Krallık) dil dosyasını içeri aktarıyoruz

Vue.filter('formatDate', function(value, format) {
  if (value) {
    return moment(String(value)).format(format);
  }
});

Vue.prototype.$moment = function (dateString) {
  // Kullanıcının tarayıcı dilini tespit ediyoruz
  const userLang = navigator.language || navigator.userLanguage;
  console.log(userLang);
  // moment.js'ye kullanıcının tarayıcı dilini iletmek için kullanıyoruz
  if (userLang === 'tr') {
    return moment(dateString).locale('tr');
  } else {
    return moment(dateString).locale('en-gb');
  }
};
