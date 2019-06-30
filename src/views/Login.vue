<template lang="pug">
#login
  .wrapper
    .checkForm
      .singup.form-title.active-title(@click='toggleForms') Sing up
      .login.form-title(@click='toggleForms') Log in
    .row.justify-center
      form.singup-form(action="#" v-if='isSingup')
        input.singup-form__name(type='text' name='username' id='singup-username' placeholder='enter username' required pattern='.{2,}' v-model='username')
        input.singup-form__password(type='password' name='password' id='singup-password' placeholder='enter password' required pattern='.{6,}' v-model='password')
        input.singup-form__check-password(type='password' name='password' id='password' placeholder='repeat password' required)
        button.submit-button.singup-submit(type='submit') Sing up
      form.login-form(action="#" v-else)
        input.login-form__name(type='text' name='username' id='login-username' placeholder='enter username' required pattern='.{2,}' v-model='username')
        input.login-form__password(type='password' name='password' id='login-password' placeholder='enter password' required pattern='.{6,}' v-model='password')
        button.submit-button.login-submit(type='submit') Log in
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      isSingup: true,
      username: '',
      password: ''
    }
  },
  methods: {
    toggleForms: function(event){
      var singup = document.querySelector('.singup');
      var login = document.querySelector('.login');
      if([].includes.call(event.target.classList, 'active-title')){
      } else {
        if(event.target == singup){
          this.isSingup = true;
          singup.classList.add('active-title');
          login.classList.remove('active-title');
        } else if(event.target == login){
          this.isSingup = false;
          login.classList.add('active-title');
          singup.classList.remove('active-title');
        }
      }
    },
    login: function(){
      const {username, password} = this;
    }
  }
}
</script>

<style lang="sass" scoped>
.checkForm
  display: flex
  justify-content: center
  align-items: center
  height: 44px

.form-title
  text-transform: uppercase
  color: lightgrey
  transition: .2s
  cursor: pointer

.active-title
  font-size: 40px
  color: black

.singup
  margin-right: 10px

form
  width: 400px
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: center

input
  width: 100%
  border: none
  border-bottom: 1px solid black
  padding: 5px
  padding-left: 10px
  outline: none
  margin-top: 30px
  transition: .2s

  &:focus
  	transform: scale(1.05)
  	border-bottom: 1px solid #fb9d53

.submit-button
  border: none
  padding: 10px 15px
  text-transform: uppercase
  border-radius: 5px
  background-color: hsl(26, 95%, 80%)
  margin-top: 30px
  cursor: pointer
  transition: .2s
  outline: none

  &:hover
    transform: scale(1.1)
    background-color: hsl(26, 95%, 65%)

  &:focus
    transform: scale(1.1)
    background-color: hsl(26, 95%, 65%)

</style>
