<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
          <!-- 뒤로가기 버튼 -->
        </ion-buttons>
        <ion-title>알림</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item v-for="notification in notifications" :key="notification.id">
          <ion-icon :icon="notification.icon" slot="start"></ion-icon>
          <ion-label>
            <h3>{{ notification.title }}</h3>
            <p>{{ notification.details }}</p>
          </ion-label>
          <ion-note slot="end">{{ notification.time }}</ion-note>
        </ion-item>
      </ion-list>
    </ion-content>
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
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonNote,
  IonButtons,
  IonBackButton,
} from "@ionic/vue";
import {
  mailOutline,
  paperPlaneOutline,
  notificationsOutline,
  bicycleOutline,
  leafOutline,
} from "ionicons/icons";

// 랜덤한 예시 데이터 생성
const notifications = [
  {
    id: 1,
    icon: mailOutline,
    title: "새로운 메시지가 왔어요!",
    details: "메시지를 확인해 주세요!",
    time: "12:01 PM",
  },
  {
    id: 2,
    icon: paperPlaneOutline,
    title: "전체 요청",
    details: "필요한 비용결제를 요청 안내했어요?",
    time: "11:46 AM",
  },
  {
    id: 3,
    icon: notificationsOutline,
    title: "공지",
    details: "새로운 공지를 확인해 주세요!",
    time: "11:30 AM",
  },
  {
    id: 4,
    icon: bicycleOutline,
    title: "새로운 모임 대화방이 열렸어요!",
    details: "방갈래 인사해주세요!",
    time: "10:24 AM",
  },
  {
    id: 5,
    icon: leafOutline,
    title: "건강 도착!",
    details: "OO프로그램의 필드테스트 건강이 도착했어요!",
    time: "09:15 AM",
  },
];
</script>
