<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-button expand="block" color="medium">오늘의 학기</ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12">
            <ion-button expand="block" color="medium">강좌 목록</ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <ion-button expand="block" color="medium" @click="goToTab3New">프로필스토리</ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button expand="block" color="medium" @click="goToNotifications">내 예약 관리</ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12">
            <ion-button expand="block" color="medium">강사님들</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
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
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/vue";
import { useRouter } from "vue-router";

// 페이지 라우터 설정
const router = useRouter();

const goToNotifications = () => {
  router.push(`/Notifications/`);
}

const goToTab3New = () => {
  router.push(`/tabs/tab3new`);
}
</script>
