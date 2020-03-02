/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '../css/app.css';
import Vue from 'vue'


import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify);

const opts = {
    icons: {
        iconfont: 'md',
}
};
const vuetify = new Vuetify(opts);

import * as  VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load:{
        key: 'AIzaSyCVIiPg1Thuzvc8-8DPBMYIXYhGacOgrPQ',
        libraries: 'places'
    }
});


Vue.component('store-locator', require('./StoreLocator').default);
Vue.component('shop-map', require('./ShopMap.vue').default);
new Vue({
    el: "#app",
    vuetify


});


// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
