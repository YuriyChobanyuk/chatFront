<template lang="pug">
form(action='#' @submit.prevent='submitMessage').message-form
	h2.message-form__title Message
	input.message-form__name(id='name-input' name='name' type='text' placeholder='enter youtt name' v-model='messName')
	textarea.message-form__text(id='messageText' name='messageText' rows='5' v-model='messText')
	button.message-form__submit() Send
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

export default {
  name: 'MessageForm',
  data() {
    return {
      messText: '',
			messName: ''
    }
  },
  methods: {
    ...mapActions(['addMessage']),
    ...mapMutations(['updateMessages']),
    submitMessage: function(){
      this.addMessage({message: this.messText,
											name: this.messName,
											creationDate: Date.now()});
      this.messText = '';
    }
  },
  mounted(){
    this.updateMessages()
  }
}
</script>

<style lang="sass" scoped>
.message-form
  &__title
    color: red
    padding: 10px
    text-transform: uppercase

  &__text
    resize: none
    width: 100%
    padding: 5px
    transition: .2s
    outline: none
    border-radius: 3px

    &:focus
      transform: scale(1.05)
      border: 2px solid orange

  &__submit
    padding: 10px
    border-radius: 5px
    border: none
    text-transform: uppercase
    cursor: pointer
    margin-top: 10px
    margin-left: 10px
    transition: .15s

    &:hover
      background-color: #fb9d53
</style>
