<template>
  <ion-modal
    class="permission-modal"
    :is-open="showModal"
    @onDidDismiss="modalDismissed"
    :backdrop-dismiss="false"
  >
    <ion-header>
      <ion-toolbar>
        <ion-title>필요한 앱 권한</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-icon :icon="locationOutline" slot="start"></ion-icon>
          <ion-label>
            <h3>위치</h3>
            <p>현재 위치 기반의 날씨, 교통, 주변 정보 제공</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="notificationsOutline" slot="start"></ion-icon>
          <ion-label>
            <h3>알림</h3>
            <p>중요한 정보 및 사건 알림 제공</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="cameraOutline" slot="start"></ion-icon>
          <ion-label>
            <h3>카메라</h3>
            <p>사진 촬영 및 동영상 녹화 기능</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="imageOutline" slot="start"></ion-icon>
          <ion-label>
            <h3>사진</h3>
            <p>사진 선택 및 업로드 기능</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-icon :icon="calendarOutline" slot="start"></ion-icon>
          <ion-label>
            <h3>캘린더</h3>
            <p>일정 동기화 및 알림 기능</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-footer>
      <ion-button expand="block" @click="closeModal">확인</ion-button>
    </ion-footer>
  </ion-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonButton,
  IonList,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/vue";
import {
  locationOutline,
  notificationsOutline,
  cameraOutline,
  imageOutline,
  calendarOutline,
} from "ionicons/icons";

const showModal = ref(true);

// 모달을 닫는 함수
const closeModal = () => {
  showModal.value = false;  // 이 부분이 모달을 닫습니다.
};

// 모달이 닫힌 후 처리
const modalDismissed = () => {
  showModal.value = false;  // 이 부분이 반응형으로 모달의 상태를 관리합니다.
};
</script>

<style scoped>
.permission-modal {
  --width: 90%;
  --height: 70%;
  --border-radius: 6px;
  margin-top: auto;
  margin-bottom: auto;
}

.permission-modal .ion-padding {
  padding: 16px;
}

.permission-modal ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  --min-height: 40px;
  --border-width: 0;
}
</style>
