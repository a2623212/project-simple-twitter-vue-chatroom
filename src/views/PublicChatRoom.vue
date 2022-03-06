<template>
  <div class="container">
    <div class="nav">
      <Navbar :current-status="currentStatus" />
    </div>
    <div class="sidebar">
      <h4 class="title">上線使用者 (5)</h4>
      <div class="chat-list">
        <ChatList :current-status="currentStatus" />
      </div>
    </div>
    <div class="chatroom-section">
      <h4 class="title">公開聊天室</h4>
      <ChatRoom :chatroom="chatroom" @after-submit="handelMessageSubmit" />
    </div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import ChatList from "./../components/ChatList.vue";
import ChatRoom from "./../components/ChatRoom.vue";
import { io } from "socket.io-client";
const socket = io("https://twitter-chatroom-challenge.herokuapp.com", {
  withCredentials: true,
});
const dummyData = [
  {
    userId: 1,
    id: 100,
    message: "今天天氣真好",
    avatar: "https://pic.pimg.tw/holmes1234/1378818312-2328530189.jpg",
    createAt: "Sat Mar 05 2022 13:06:40 GMT+0800 (台北標準時間)",
  },
  {
    userId: 3,
    id: 102,
    message: "我五點就起床了",
    avatar: "https://i.imgur.com/XMnquqL.jpg",
    createAt: "Sat Mar 05 2022 15:22:40 GMT+0800 (台北標準時間)",
  },
  {
    userId: 14,
    id: 103,
    message: "上面這些都是假資料，前端連不到後端的socket",
    avatar: "https://i.imgur.com/XMnquqL.jpg",
    createAt: "Sat Mar 05 2022 15:22:40 GMT+0800 (台北標準時間)",
  },
];

export default {
  name: "PublicChatRoom",
  components: {
    Navbar,
    ChatList,
    ChatRoom,
  },
  created() {
    this.chatroom = dummyData;
  },
  mounted() {
    this.socket = socket;
    this.socket.on("allMessage", function (data) {
      console.log("data", data);
      console.log("connected");
      this.chatroom.push(data);
    });
    this.socket.on("connect", () => {
      console.log(socket.connected); // true
    });
  },
  data() {
    return {
      currentStatus: {
        isIndex: false,
        isPublic: true,
        isPrivate: false,
        isUser: false,
        isSetting: false,
      },
      text: "",
      chatroom: [],
      socket: null,
    };
  },
  methods: {
    handelMessageSubmit(message) {
      console.log("sentmessage:", message);

      this.socket.emit("sentMessage", {
        message,
      });
      this.chatroom.push(message);
    },
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
}
.chatroom-section {
  border-left: 1px solid $borderColor;
}
h4 {
  font-size: 24px;
  color: #171725;
  padding: {
    top: 20px;
    left: 20px;
    bottom: 20px;
  }
  border-bottom: 1px solid $borderColor;
}
</style>