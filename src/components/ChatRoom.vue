<template>
  <div>
    <div class="message-room">
      <div
        :class="[
          'message-room-group',
          { mine: currentUser.id === item.userId },
        ]"
        v-for="item in chatroom"
        :key="item.id"
      >
        <img
          :src="item.avatar"
          alt=""
          class="message-room-group__img"
          v-show="!(currentUser.id === item.userId)"
        />
        <div>
          <div class="message-room-group__message">{{ item.message }}</div>
          <div class="message-room-group__timestamp">
            {{ item.createAt | fromNow() }}
          </div>
        </div>
      </div>
    </div>
    <div class="input-group">
      <input
        type="text"
        class="input-group__input"
        v-model="message"
        @keyup.enter.stop.prevent="handleSubmit"
        placeholder="輸入訊息..."
      />
      <button class="input-group__btn" @click.stop.prevent="handleSubmit">
        <img
          src="https://i.imgur.com/58u1k8w.png"
          alt=""
          class="input-group__img"
        />
      </button>
    </div>
  </div>
</template>

<script>
const dummyData = [
  {
    userId: 1,
    id: 100,
    message: "今天天氣真好",
    avatar: "https://pic.pimg.tw/holmes1234/1378818312-2328530189.jpg",
    createAt: "Sat Mar 05 2022 13:06:40 GMT+0800 (台北標準時間)",
  },
  {
    userId: 2,
    id: 101,
    message: "我剛睡醒",
    avatar:
      "https://www.teepr.com/wp-content/uploads/2019/12/79001361_1423192224541841_8985136557497253888_o.jpg",
    createAt: "Sat Mar 05 2022 14:55:40 GMT+0800 (台北標準時間)",
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
    message: "喔！是喔！",
    avatar: "https://i.imgur.com/XMnquqL.jpg",
    createAt: "Sat Mar 05 2022 15:22:40 GMT+0800 (台北標準時間)",
  },
];
import { mapState } from "vuex";
import moment from "moment";
moment.locale("zh-tw");

export default {
  data() {
    return {
      message: "",
      chatroom: [],
    };
  },
  created() {
    this.chatroom = dummyData;
  },
  filters: {
    fromNow(dateTime) {
      return dateTime ? moment(dateTime).format("a h:mm") : "-";
    },
  },
  methods: {
    handleSubmit() {
      this.chatroom.push({
        userId: this.currentUser.id,
        message: this.message,
        avatar: this.currentUser.avatar,
        createAt: new Date(),
      });
      this.message = "";
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
};
</script>

<style lang="scss" scoped>
// 其他人的style
.message-room {
  // border-right: 1px #e6ecf0 solid;
  width: 712px;
  max-height: 1061px;
  &-group {
    display: flex;
    margin: 20px;
    &__img {
      width: 40px;
      height: 40px;
      border-radius: 100px;
      margin-right: 10px;
    }
    &__message {
      word-break: break-all;
      display: flex;
      align-items: center;
      max-width: 365px;
      font-size: 15px;
      border-radius: 25px 25px 25px 0px;
      background-color: #e6ecf0;
      min-height: 40px;
      padding: 10px 15px 10px 15px;
    }
    &__timestamp {
      font-size: 12px;
    }
  }
  // 本人的style
  .message-room-group {
    &.mine {
      display: flex;
      justify-content: flex-end;
      .message-room-group__message {
        background-color: #ff6600;
        color: #ffffff;
        border-radius: 25px 25px 0px 25px;
      }
      .message-room-group__timestamp {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
.input-group {
  position: fixed;
  bottom: 0px;
  width: 712px;
  height: 64px;
  border: {
    top: 1px solid #e6ecf0;
  }
  display: flex;
  align-items: center;
  &__input {
    border: 0;
    margin: 16px;
    padding: 10px;
    padding-left: 20px;
    width: 641px;
    height: 32px;
    border-radius: 50px;
    background-color: #e6ecf0;
  }
  &__img {
    width: 20px;
    height: 20px;
  }
}
</style>