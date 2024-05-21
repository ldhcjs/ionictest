<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-avatar class="custom-avatar" slot="start" @click="goToEditInfo">
          <img src="https://via.placeholder.com/150" alt="Avatar Placeholder" />
        </ion-avatar>
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

import { useRouter } from "vue-router";

// 페이지 라우터 설정
const router = useRouter();

// 아이템 리스트 정의
const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

// 정보 수정으로 이동하는 함수
const goToEditInfo = () => {
  router.push(`/tab5/editinfo`);
};
</script>

<style scoped>
.custom-avatar {
  --border-radius: 20%;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border: 2px solid #000; /* 예시로 테두리를 추가합니다 */
}
</style>
