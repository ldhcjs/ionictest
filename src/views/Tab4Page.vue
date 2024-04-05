<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>대화방</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item
          v-for="chat in chatsList"
          :key="chat.id"
          lines="none"
          detail="true"
          @click="goToChatDetail(chat.id)"
        >
          <ion-avatar slot="start">
            <img :src="chat.avatar" />
          </ion-avatar>
          <ion-label>
            <h2>{{ chat.name }}</h2>
            <p>{{ chat.lastMessage }}</p>
          </ion-label>
          <ion-note slot="end">{{ chat.time }}</ion-note>
          <ion-badge v-if="chat.unreadCount" color="danger" slot="end">
            {{ chat.unreadCount }}
          </ion-badge>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonNote,
  IonBadge,
} from "@ionic/vue";

import { ref } from "vue";
import { useRouter } from "vue-router";

// 페이지 라우터 설정
const router = useRouter();

// Example data structure for chats
const chatsList = ref([
  {
    id: 1,
    name: "골든샷 모임 결성",
    lastMessage: "골프장은 어디로 할까요?",
    time: "99+",
    avatar: "path_to_avatar_image",
    unreadCount: 99,
  },
  {
    id: 2,
    name: "골프치자",
    lastMessage: "캐디피는 각자 N빵 할까요?",
    time: "1+",
    avatar: "path_to_avatar_image",
    unreadCount: 1,
  },
  {
    id: 3,
    name: "골프 친목 도모",
    lastMessage: "강남에서 모여서 출발할까요?",
    time: "439+",
    avatar: "path_to_avatar_image",
    unreadCount: 439,
  },
  {
    id: 4,
    name: "만남 추구",
    lastMessage: "권용판은 골프 전문가인가요?",
    time: "0",
    avatar: "path_to_avatar_image",
    unreadCount: 0,
  },
  {
    id: 5,
    name: "프로 렛슨 원해요",
    lastMessage: "어떤 프로골퍼일지 궁금하네요",
    time: "72+",
    avatar: "path_to_avatar_image",
    unreadCount: 72,
  },
  // ... more chat items
]);

// 대화방 상세페이지로 이동하는 함수
const goToChatDetail = (chatId: number) => {
  router.push(`/tab4/detail/${chatId}`);
};
</script>

<style scoped>
</style>
