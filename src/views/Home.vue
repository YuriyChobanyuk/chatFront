<template lang='pug'>
  .home
    .wrapper
      .row
        .column-desktop-1-2
          MessageForm
        .column-desktop-1-2
          MessageList
</template>

<script>
// @ is an alias to /src
import MessageForm from '@/components/MessageForm'
import MessageList from '@/components/MessageList'

export default {
  name: 'home',
  components: {
    MessageForm,
    MessageList
  }
}
</script>
