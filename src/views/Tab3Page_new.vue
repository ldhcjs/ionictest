<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="no-shadow">
        <ion-title>{{ greetingMessage }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- 모임 찾기 -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>오늘의 모임</ion-card-title>
        </ion-card-header>
        <ion-card-content>{{ todayMeeting }}</ion-card-content>
      </ion-card>

      <!-- 이벤트 및 광고 영역 -->
      <swiper-container loop="true" pagination="true">
        <swiper-slide><ion-button>Slide 1</ion-button></swiper-slide>
        <swiper-slide><ion-button>Slide 2</ion-button></swiper-slide>
        <swiper-slide><ion-button>Slide 3</ion-button></swiper-slide>
      </swiper-container>

      <!-- 프로 찾기 -->
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>프로 찾기</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>{{ proCount }}</IonCardContent>
      </IonCard>

      <!-- 나의 예약 -->
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>나의 클래스</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>{{ myClassCount }}</IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>나의 예약</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>{{ myReservationCount }}</IonCardContent>
      </IonCard>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonHeader,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonButton,
} from "@ionic/vue";

const greetingMessage = ref("Guest님 반가워요!");
const todayMeeting = ref(1234);
const proCount = ref(1234);
const myClassCount = ref(1);
const myReservationCount = ref(1);
</script>

<style scoped>
.no-shadow {
  --box-shadow: none;
}
</style>
