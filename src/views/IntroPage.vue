<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Intro Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-progress-bar type="indeterminate"></ion-progress-bar>
      <ion-img
        src="https://ionic-docs-demo-v7.vercel.app/assets/madison.jpg"
        alt="The Wisconsin State Capitol building in Madison, WI at night"
      />
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
  IonProgressBar,
  IonImg
} from "@ionic/vue";

import {} from "@ionic/vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

// useRouter 훅을 사용하여 라우터 인스턴스에 접근합니다.
const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push("/tabs/");
  }, 2000);
});
</script>
