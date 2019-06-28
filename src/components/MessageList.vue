<template lang="pug">
ul.message-list
  li.message-list__item(v-for='msg, index in messages')
    .message-list__name {{msg.name}}
    .message-list__date {{msg.creationDate | redactDate}}
    .message-list__text {{msg.message}}
</template>

<script>
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
  }
}
</script>

<style lang="sass" scoped>
.message-list
  background-color: #e6e6e6
  padding: 10px
  padding-top: 1px
  list-style-type: none

  &__item
    background-color: #8bb1ff
    border-radius: 7px
    padding: 10px
    margin-top: 10px
    display: flex
    flex-wrap: wrap

  &__name
    padding: 10px
    width: 50%

  &__date
    padding: 10px
    width: 50%

  &__text
    padding: 5px
    width: 100%

</style>
