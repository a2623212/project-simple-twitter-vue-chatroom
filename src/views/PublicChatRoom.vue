<template>
  <div class="container">
    <div class="nav">
      <Navbar :current-status="currentStatus" />
    </div>
    <div class="sidebar">
      <h4 class="title">上線使用者 (5)</h4>
    </div>
    <div class="chatroom">
      <h4 class="title">公開聊天室</h4>
    </div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
export default {
  name: "PublicChatRoom",
  components: {
    Navbar,
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
    };
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
.sidebar,
.chatroom {
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