<template lang="pug">
#myscroll
  ul.message-list
    li.message-list__item(v-for='msg, index in messages')
      .message-list__name {{msg.name}}
      .message-list__date {{msg.creationDate | redactDate}}
      .message-list__line
      .message-list__text {{msg.message}}
</template>

<script>
import Scrollbar from 'smooth-scrollbar'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'MessageList',
  computed: {
    ...mapGetters({messages: 'getMessages'})
  },
  methods: {
    ...mapActions(['fetchMessages'])
  },
  mounted(){
    this.fetchMessages();
    Scrollbar.init(document.querySelector('#myscroll'))
  }
}
</script>

<style lang="sass" scoped>
.message-list
  padding: 10px
  padding-top: 1px
  list-style-type: none
  height: 600px

  &__item
    background-color: #9affe5
    border-radius: 7px
    padding: 10px
    margin-top: 10px
    display: flex
    flex-wrap: wrap

  &__name
    padding: 10px
    width: 50%
    font-size: 15px
    color: grey

  &__line
    border-bottom: 1px solid grey
    width: 100%
    position: relative
    top: -8px
    margin: 0px 8px

  &__date
    padding: 10px
    width: 50%
    font-size: 13px
    color: grey
    text-align: right

  &__text
    padding: 0px 10px
    width: 100%
    font-size: 14px

</style>
