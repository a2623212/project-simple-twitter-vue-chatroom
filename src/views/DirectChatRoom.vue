<template>
  <div class="container">
    <div class="nav">
      <Navbar :current-status="currentStatus" />
    </div>
    <div class="sidebar">
      <h4 class="title">訊息</h4>
      <div class="chat-list">
        <ChatList :current-status="currentStatus" />
      </div>
    </div>
    <div class="chatroom-section">
      <div class="title">Apple <span>@apple</span></div>
      <ChatRoom />
    </div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import ChatList from "./../components/ChatList.vue";
import ChatRoom from "./../components/ChatRoom.vue";
// import VueSocketIO from "vue-socket.io";

export default {
  name: "PublicChatRoom",
  components: {
    Navbar,
    ChatList,
    ChatRoom,
  },
  data() {
    return {
      currentStatus: {
        isIndex: false,
        isPublic: false,
        isPrivate: true,
        isUser: false,
        isSetting: false,
      },
      text: "",
      // socket: new VueSocketIO({
      //   debug: true,
      //   connection:
      //     "https://twitter-chatroom-challenge.herokuapp.com/api/chatroom",
      // }),
    };
  },
  methods: {
    // async send() {
    //   console.log(this.socket.io.connected);
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "./../styles/variables.scss";
.container {
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 4fr 7fr;
}
.sidebar {
  //維持比例用，隨時可以刪除
  width: 414px;
  border-left: 1px solid $borderColor;
}
.chatroom-section {
  border-left: 1px solid $borderColor;
}
.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 74px;
  font-size: 24px;
  font-weight: 700;
  color: #171725;
  padding: {
    top: 20px;
    left: 20px;
    bottom: 20px;
  }
  border-bottom: 1px solid $borderColor;
}
span {
  display: block;
  color: $messageTextColor;
  font: {
    size: 16px;
    weight: 400;
  }
}
</style>