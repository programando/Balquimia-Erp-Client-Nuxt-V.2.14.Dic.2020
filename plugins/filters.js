import Vue from "vue"
var Moment = require('moment');
var Numeral = require('numeral');

Moment.locale("es");


Vue.filter('FechaLarga', (value) => {  return Moment(value).format('DD-MMM-YYYY');     });
Vue.filter('FechaCorta', (value) => {  return Moment(value).format('DD-MM-YY');     });
Vue.filter('NumeroEntero', (value) => {  return Numeral(value).format('0,0');             });
Vue.filter('Capitalize', (value) => {
   if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
   });

