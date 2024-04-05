<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/tab4"></ion-back-button>
        </ion-buttons>
        <ion-title>채팅방</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="chat-container">
        <div
          v-for="message in messages"
          :key="message.id"
          :class="{ mine: message.isMine, yours: !message.isMine }"
        >
          <div class="message">
            <div class="message-content">{{ message.content }}</div>
            <div class="message-timestamp">{{ message.timestamp }}</div>
          </div>
        </div>
      </div>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="presentActionSheet">
            <ion-icon :icon="add"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-item lines="none">
          <ion-input
            placeholder="메시지 입력..."
            v-model="newMessage"
          ></ion-input>
          <ion-buttons slot="end">
            <ion-button @click="sendMessage">
              <ion-icon :icon="send"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-item>
      </ion-toolbar>
    </ion-footer>

    <ion-action-sheet
      v-model="showActionSheet"
      :buttons="actionSheetButtons"
    ></ion-action-sheet>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonFooter,
  IonItem,
  IonInput,
  IonActionSheet,
  IonBackButton,
  IonButtons,
  actionSheetController,
} from "@ionic/vue";
import { add, send, search, person, settings } from "ionicons/icons";

// 서브메뉴가 표시되는지 여부를 추적하는 반응형 참조
const showActionSheet = ref(false);

// 가상의 채팅 메시지 데이터
const messages = ref([
  {
    id: 1,
    content: "안녕, 오늘 어떻게 지냈어?",
    timestamp: "10:15 AM",
    isMine: false,
  },
  { id: 2, content: "잘 지냈어, 너는?", timestamp: "10:16 AM", isMine: true },
  { id: 3, content: "나도 괜찮았어.", timestamp: "10:17 AM", isMine: false },
  // ... 더 많은 메시지들
]);

// 새 메시지 입력을 위한 반응형 참조
const newMessage = ref("");
const sendMessage = () => {
  if (newMessage.value.trim()) {
    // 메시지를 보낸다: 여기서는 예시로만 로컬 메시지 목록에 추가합니다.
    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    messages.value.push({
      id: messages.value.length + 1,
      content: newMessage.value,
      timestamp,
      isMine: true,
    });
    newMessage.value = ""; // 입력란 초기화
  }
};

// Action Sheet에서 사용할 버튼들을 정의합니다.
const actionSheetButtons = [
  {
    text: "모임찾기",
    icon: search,
    handler: () => {
      console.log("모임찾기 clicked");
    },
  },
  {
    text: "프로필 보기",
    icon: person,
    handler: () => {
      console.log("프로필 보기 clicked");
    },
  },
  {
    text: "설정",
    icon: settings,
    handler: () => {
      console.log("설정 clicked");
    },
  },
];

// Action Sheet를 표시하는 함수
const presentActionSheet = async () => {
  const actionSheet = await actionSheetController.create({
    header: "메뉴",
    buttons: actionSheetButtons,
  });
  await actionSheet.present();
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.message {
  max-width: 75%;
  margin: 5px;
  padding: 10px;
  border-radius: 20px;
  color: white;
}

.mine {
  align-self: flex-end;
  background-color: #488aff; /* Ionic primary color */
}

.yours {
  align-self: flex-start;
  background-color: #32db64; /* Ionic secondary color */
}

.message-content {
  margin-bottom: 5px;
}

.message-timestamp {
  font-size: 0.7em;
  text-align: right;
  color: #ccc;
}
ion-footer {
  --background: #fff;
}

ion-input {
  --padding-start: 0;
  --padding-end: 0;
}
</style>
