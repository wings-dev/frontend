import Vue from 'vue';
import moment from 'moment';
import 'moment/locale/tr'; // Türkçe dil dosyasını içeri aktarıyoruz
import 'moment/locale/en-gb'; // İngilizce (Birleşik Krallık) dil dosyasını içeri aktarıyoruz

Vue.filter('formatDate', function(value, inputFormat, outputFormat) {
  if (value) {
    return moment(value, inputFormat).locale('tr').format(outputFormat);
  }
});

Vue.prototype.$moment = function (dateString) {
  // Kullanıcının tarayıcı dilini tespit etmek için
  // process.browser veya process.client kullanarak tarayıcı ortamında olduğumuzu kontrol ediyoruz
  if (process.browser || process.client) {
    const userLang = navigator.language || navigator.userLanguage;
    // moment.js'ye kullanıcının tarayıcı dilini iletmek için kullanıyoruz
    if (userLang === 'tr') {
      return moment(dateString).locale('tr');
    } else {
      return moment(dateString).locale('en-gb');
    }
  } else {
    // Sunucu tarafında olduğumuzda varsayılan dil olarak İngilizce (Birleşik Krallık) kullanıyoruz
    return moment(dateString).locale('tr');
  }
};
