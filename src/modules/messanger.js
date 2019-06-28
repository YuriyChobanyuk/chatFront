import io from 'socket.io-client'
import axios from 'axios'

export default {
  state: {
    messages: [],
    socket: io('http://localhost:4000')
  },
  actions: {
    addMessage: function(ctx, message){
      ctx.state.socket.emit('sendMess', message);
    },
    fetchMessages: function(ctx){
      axios.get('http://localhost:4000/messages')
      .then((res) => {
        ctx.commit('initMessages', res.data);
      })
      .catch((err) => {
        var error = Object.assign({}, err);
        alert(error.messName + error.messText)
      })
    }
  },
  mutations: {
    initMessages: function(state, messages){
      messages.sort((a, b) => b.creationDate - a.creationDate);
      state.messages = messages;
    },
    updateMessages: function(state){
      state.socket.on('addMess', function(data) {
        state.messages.unshift(data.message);
      })
    }
  },
  getters: {
    getMessages: function(state){
      return state.messages;
    }
  }
}
