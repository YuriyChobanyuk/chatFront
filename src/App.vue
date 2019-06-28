<template lang='pug'>
  #app
    #nav
      router-link(to='/') Home
      router-link(to='/about') About
    router-view
</template>

<style lang='sass'>
@import '../public/sass/style.sass'
</style>

<style lang='sass'>
#nav
  padding: 15px
  padding-left: 150px
  background: linear-gradient(to right, #fa8d8d, #ffef8b)
  display: flex
  align-items: center
  justify-content: flex-start
  margin-bottom: 50px

  a
    text-decoration: none
    color: white
    font-weight: bold
    text-transform: uppercase
    transition: .3s
    padding: 5px
    border-radius: 5px
    margin: 0px 5px

    &:hover
      background-color: #4e8cfb
</style>
