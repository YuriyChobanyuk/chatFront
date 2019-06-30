<template lang="pug">
form(action='#' @submit.prevent='submitMessage').message-form
	h2.message-form__title Message
	input.message-form__name(id='name-input' name='name' type='text' placeholder='enter youtt name' v-model='messName' required)
	textarea.message-form__text(id='messageText' name='messageText' rows='5' v-model='messText' required placeholder="Enter your message")
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
      border: 1px solid #fb9d53

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

.message-form__name
	width: 100%
	margin-bottom: 15px
	border: none
	border-bottom: 1px solid black
	padding: 5px
	padding-left: 10px
	outline: none
	transition: .2s

	&:focus
		transform: scale(1.05)
		border-bottom: 1px solid #fb9d53
</style>
