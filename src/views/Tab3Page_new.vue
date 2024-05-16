<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>{{ greetingMessage }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- 모임 찾기 -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>모임 찾기</ion-card-title>
          <ion-card-subtitle>모임을 만들거나 찾을 수 있어요</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>{{ todayMeeting }}</ion-card-content>
      </ion-card>

      <!-- 이벤트 및 광고 영역 -->
      <swiper-container loop="true" pagination="true" class="mySwiper">
        <swiper-slide>
          <ion-card>
            <ion-card-header>
              <ion-card-title>Slide 1</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              This is the content of slide 1
            </ion-card-content>
          </ion-card>
        </swiper-slide>
        <swiper-slide>
          <ion-card>
            <ion-card-header>
              <ion-card-title>Slide 2</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              This is the content of slide 2
            </ion-card-content>
          </ion-card>
        </swiper-slide>
        <swiper-slide>
          <ion-card>
            <ion-card-header>
              <ion-card-title>Slide 3</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              This is the content of slide 3
            </ion-card-content>
          </ion-card>
        </swiper-slide>
      </swiper-container>

      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <!-- 프로 찾기 -->
            <ion-card>
              <ion-card-header>
                <ion-card-title>프로 찾기</ion-card-title>
                <ion-card-subtitle
                  >골든샷과 함께하는<br />프로들을 만나보세요</ion-card-subtitle
                >
              </ion-card-header>
              <ion-card-content>{{ proCount }}</ion-card-content>
            </ion-card>
          </ion-col>
          <!-- 나의 예약 -->
          <ion-col size="6">
            <ion-card>
              <ion-card-header>
                <ion-card-title>나의 예약</ion-card-title>
                <ion-card-subtitle
                  >나의 클래스 일정을<br />확인하고
                  관리하세요!</ion-card-subtitle
                >
              </ion-card-header>
              <ion-card-content>
                <ion-grid>
                  <ion-row>
                    <ion-button>나의 클래스 {{ myClassCount }}</ion-button>
                  </ion-row>
                  <ion-row>
                    <ion-button>나의 예약 {{ myReservationCount }}</ion-button>
                  </ion-row>
                </ion-grid>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
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
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/vue";
import "swiper/swiper-bundle.css";

const greetingMessage = ref("Guest님 반가워요!");
const todayMeeting = ref(1234);
const proCount = ref(1234);
const myClassCount = ref(1);
const myReservationCount = ref(1);
</script>

<style scoped>
.no-shadow {
  --border-color: #ffffff;
  --border-width: 0px 0;
  --border-style: double;
}
.mySwiper {
  width: 100%;
  height: auto;
}
</style>
