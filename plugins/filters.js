import Vue from 'vue';
import numberFormat from '~/filters/numberFormat';
import titleCase from '~/filters/titlecase';

Vue.filter('numberFormat', numberFormat);
Vue.filter('titlecase', titleCase);
