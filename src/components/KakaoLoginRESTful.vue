<template>
  <ion-button @click="requestAuthorization">
    <ion-img :src="kakaoLoginButtonImg" />
  </ion-button>
  <ion-text color="primary">
    <p>{{ accessToken }}</p>
  </ion-text>
</template>

<script setup lang="ts">
import { IonButton, IonImg, IonText } from "@ionic/vue";
import {
  onIonViewWillEnter,
  onIonViewDidEnter,
  onIonViewWillLeave,
  onIonViewDidLeave,
} from "@ionic/vue";
import { ref } from "vue";
import axios from "axios";

const kakaoLoginButtonImg =
  "https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg";
const REST_API_KEY = "bfabe35c3600f19f5cb469dde5a36569"; // 카카오 REST API 키
const REDIRECT_URI = "http://localhost:8100/tabs/tab1"; // 리다이렉트 URI

// Refs for storing the authorization code and tokens
const authorizationCode = ref<string>("");
const accessToken = ref<string>("");
const refreshToken = ref<string>("");

// Function to construct the authorization URL and redirect the user
function requestAuthorization() {
  const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  window.location.href = url; // 사용자를 카카오 로그인 페이지로 리다이렉트
}

// Function to handle the redirect callback from Kakao
// function handleCallback() {
//   const urlParams = new URLSearchParams(window.location.search);
//   const code = urlParams.get("code");
//   if (code) {
//     authorizationCode.value = code; // authorizationCode 저장
//     requestAccessToken(code); // Access Token 요청 함수 호출
//   } else {
//     console.error("Authorization code not found");
//   }
// }

// Function to request the access token from Kakao
// async function requestAccessToken(code: string) {
//   const tokenUrl = "https://kauth.kakao.com/oauth/token";
//   const params = new URLSearchParams({
//     grant_type: "authorization_code",
//     client_id: REST_API_KEY,
//     redirect_uri: REDIRECT_URI,
//     code: code,
//   });

//   try {
//     const response = await axios.post(tokenUrl, params.toString(), {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     });
//     accessToken.value = response.data.access_token; // accessToken 저장
//     refreshToken.value = response.data.refresh_token; // refreshToken 저장
//     console.log("Access Token and Refresh Token have been saved.");
//   } catch (error) {
//     console.error("Failed to retrieve access token:", error.response.data);
//   }
// }
</script>
