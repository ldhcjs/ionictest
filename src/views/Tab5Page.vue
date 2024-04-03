<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Eunhwan</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item
          class="background_rgb_155_155_244-ionic-component rounded-item"
        >
          <!-- <ion-avatar slot="start">
            <img src="path_to_your_image.jpg" />
          </ion-avatar> -->
          <ion-label>Golden Fee</ion-label>
          <ion-badge slot="end">999,999 SHOT</ion-badge>
        </ion-item>
        <ion-item>
          <ion-label>내 활동</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>나의 클래스</ion-label>
          <ion-badge slot="end">NEW!</ion-badge>
        </ion-item>
        <ion-item>
          <ion-label>나의 예약</ion-label>
          <ion-badge slot="end">NEW!</ion-badge>
        </ion-item>
        <ion-item>
          <ion-label>관심 프로</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>설정</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>알림 설정</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>SNS 연동 설정</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>이벤트</ion-label>
        </ion-item>
        <!-- 여기는 이벤트 가로 리스트뷰 작성 필요 -->
        <div class="horizontal-scroll">
          <div class="horizontal-item" v-for="item in items" :key="item">
            <ion-card class="custom-width-card">
              <ion-card-content>
                {{ item }}
              </ion-card-content>
            </ion-card>
          </div>
        </div>
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
  IonLabel,
  IonBadge,
  IonAvatar,
  IonCard,
  IonCardContent,
} from "@ionic/vue";

// 아이템 리스트 정의
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
</script>
