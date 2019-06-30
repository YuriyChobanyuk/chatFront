import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('redactDate', function (date) {
  function addZero(num){
    if(num < 10){
      return '0' + num;
    } else return num;
  }
  var gettedDate = new Date(date);
  var month = addZero(gettedDate.getMonth() + 1);
  var mydate = addZero(gettedDate.getDate());
  var hour = addZero(gettedDate.getHours());
  var minutes = addZero(gettedDate.getMinutes());

  var result = mydate + '.' + month + ' - ' + hour + ':' + minutes;
  return result;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
