<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <NaverLogin />
      <KakaoLoginRESTful />
      <UserClassListComponent />
      <ProClassListComponent />
      <ProItemListComponent />
    </ion-content>
    <!-- <NaverMapView/> -->
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import {
  onIonViewWillEnter,
  onIonViewDidEnter,
  onIonViewWillLeave,
  onIonViewDidLeave,
} from "@ionic/vue";
import { ref } from "vue";
import axios from "axios";

import UserClassListComponent from "@/components/UserClassListComponent.vue";
import ProClassListComponent from "@/components/ProClassListComponent.vue";
import ProItemListComponent from "@/components/ProItemListComponent.vue";
// import NaverMapView from "@/components/NaverMapView.vue";
import NaverLogin from "@/components/NaverLogin.vue";
import KakaoLoginRESTful from "@/components/KakaoLoginRESTful.vue" ;

// Kakao RESTful API
const REST_API_KEY = "bfabe35c3600f19f5cb469dde5a36569"; // 카카오 REST API 키
const REDIRECT_URI = "http://localhost:8100/tabs/tab1"; // 리다이렉트 URI
// Refs for storing the authorization code and tokens
const authorizationCode = ref<string>("");
const accessToken = ref<string>("");
const refreshToken = ref<string>("");

// Function to handle the redirect callback from Kakao
function handleCallback() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  if (code) {
    authorizationCode.value = code; // authorizationCode 저장
    requestAccessToken(code); // Access Token 요청 함수 호출
  } else {
    console.error("Authorization code not found");
  }
}

// Function to request the access token from Kakao
async function requestAccessToken(code: string) {
  const tokenUrl = "https://kauth.kakao.com/oauth/token";
  const params = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: code,
  });

  try {
    const response = await axios.post(tokenUrl, params.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    accessToken.value = response.data.access_token; // accessToken 저장
    refreshToken.value = response.data.refresh_token; // refreshToken 저장
    console.log(`res : ${response.data}`);
    console.log("Access Token and Refresh Token have been saved.");
  } catch (error: any) {
    console.error("Failed to retrieve access token:", error.response.data);
  }
}

onIonViewDidEnter(() => {
  console.log("Home page did enter");
});

onIonViewDidLeave(() => {
  console.log("Home page did leave");
});

onIonViewWillEnter(() => {
  // Optional: Call handleCallback on mounted if you are expecting to handle a redirect
  handleCallback();
  console.log("Home page will enter");
});

onIonViewWillLeave(() => {
  console.log("Home page will leave");
});
</script>
