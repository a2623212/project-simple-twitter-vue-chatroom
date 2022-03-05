<template>
  <div class="chat-list">
    <div class="item">
      <div class="avatar">
        <img src="https://fakeimg.pl/300/" alt="" class="avatar" />
      </div>
      <div class="info">
        <div class="info__name">
          <p class="name">Apple <span class="account">@apple</span></p>
        </div>
        <!-- 透過狀態列控制，可以讓public和private聊天室共用元件 -->
        <div class="info__message" v-show="currentStatus.isPrivate">
          入校書：性年了通個，了水值來成熱成識西益孩、文長這以母我面，果子臺歡麼……面山有組花喜們西，地從場麼馬
        </div>
      </div>
      <!-- 透過狀態列控制，可以讓public和private聊天室共用元件 -->
      <div class="time" v-show="currentStatus.isPrivate">5秒</div>
    </div>
    <!-- 假資料，串API之後可刪除 -->
    <div class="item">
      <div class="avatar">
        <img src="https://fakeimg.pl/300/" alt="" class="avatar" />
      </div>
      <div class="info">
        <div class="info__name">
          <p class="name">Apple <span class="account">@apple</span></p>
        </div>
        <div class="info__message">
          入校書：性年了通個，了水值來成熱成識西益孩、文長這以母我面，果子臺歡麼……面山有組花喜們西，地從場麼馬
        </div>
      </div>
      <div class="time">5日內</div>
    </div>
    <div class="item">
      <div class="avatar">
        <img src="https://fakeimg.pl/300/" alt="" class="avatar" />
      </div>
      <div class="info">
        <div class="info__name">
          <p class="name">Apple <span class="account">@apple</span></p>
        </div>
        <div class="info__message">
          入校書：性年了通個，了水值來成熱成識西益孩、文長這以母我面，果子臺歡麼……面山有組花喜們西，地從場麼馬
        </div>
      </div>
      <div class="time">5月16日</div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "ChatList",
  props: {
    currentStatus: {
      type: Object,
      required: true,
    },
  },
  filters: {
    fromNow(dateTime) {
      return dateTime ? moment(dateTime).fromNow() : "-";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../styles/variables.scss";

.chat-list {
  width: 100%;
  height: 84px;
}
.item {
  display: flex;
  align-items: center;
  position: relative;
  font-size: 16px;
  padding : {
    top: 15px;
    left: 16px;
    bottom: 15px;
  }
  border-bottom: 1px solid $borderColor;
  .avatar {
    width: 50px;
    height: 50px;
    img {
      border-radius: 50%;
    }
  }
  .info {
    color: $messageTextColor;
    margin-left: 8px;
    &__name {
      .name {
        color: #171725;
        font-weight: 700;
        span {
          margin-left: 3px;
          color: $messageTextColor;
          font-weight: 400;
        }
      }
    }
    &__message {
      width: 200px;
      font-size: 14px;
      margin-top: 6px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .time {
    color: $messageTextColor;
    font-weight: 500;
    font-size: 15px;
    position: absolute;
    top: 16px;
    right: 14px;
  }
}
</style>