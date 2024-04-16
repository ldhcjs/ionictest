<template>
  <ion-button @click="loginWithKakao">
    <ion-img :src="kakaoLoginButtonImg" />
  </ion-button>
  <ion-text color="primary">
    <p>{{ tokenResult }}</p>
  </ion-text>
</template>

<script setup lang="ts">
import { IonButton, IonImg, IonText, onIonViewWillEnter } from "@ionic/vue";
import { ref, onMounted } from "vue";
import axios from "axios";

const kakaoLoginButtonImg =
  "https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg";
const tokenResult = ref<string>("Init");

const REST_API_KEY = "bfabe35c3600f19f5cb469dde5a36569"; // 카카오 REST API 키
const REDIRECT_URI = 'http://localhost:8100/tabs/tab1';  // 리다이렉트 될 URI
const AUTHORIZE_CODE = 'YOUR_AUTHORIZATION_CODE_FROM_KAKAO';  // 카카오로부터 받은 인증 코드

// Extend the Window interface to include Kakao
declare global {
  interface Window {
    Kakao: any;
  }
}

function loadKakaoSDK() {
  console.log("tonylee loadKakaoSDK");
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js";
    script.integrity =
      "sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01";
    script.crossOrigin = "anonymous";
    script.onload = () => {
      window.Kakao.init("8e36ce313d3ba699361d86266f1f1612"); // Replace with your app's JavaScript key
      // SDK 초기화 여부를 판단합니다.
      console.log(window.Kakao.isInitialized());
      resolve();
    };
    script.onerror = () => reject(new Error("Failed to load Kakao SDK"));
    document.head.appendChild(script);
  });
}

function loginWithKakao() {
  console.log("tonylee loginWithKakao");
  window.Kakao.Auth.authorize({
    redirectUri: "http://localhost:8100/tabs/tab1", // Replace with your actual redirect URI
    throughTalk: false, // This ensures the authorization happens in the browser
  });
}

async function displayToken() {
  console.log("tonylee displayToken");
  const token = getCookie("authorize-access-token");
  if (token) {
    console.log(`tonylee ${token}`);
    window.Kakao.Auth.setAccessToken(token);
    console.log(`tonylee ${token}`);
    try {
      console.log(`tonylee try ${token}`);
      const res = await window.Kakao.Auth.getStatusInfo();
      if (res.status === "connected") {
        console.log(`tonylee try ${res.status}`);
        tokenResult.value =
          "Login success, token: " + window.Kakao.Auth.getAccessToken();
      }
    } catch (err) {
      window.Kakao.Auth.setAccessToken(null);
      tokenResult.value = "Failed to validate token";
      console.log(`tonylee ${tokenResult.value}`);
    }
  }
}

const handleLogin = async () => {
  console.log("tonylee handleLogin");
  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('client_id', REST_API_KEY);
  params.append('redirect_uri', REDIRECT_URI);
  params.append('code', AUTHORIZE_CODE);
  
  try {
    const { data } = await axios.post('https://kauth.kakao.com/oauth/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    tokenResult.value = data;
    console.log('Kakao token response:', data);
  } catch (error) {
    console.error('Failed to fetch tokens:', error);
  }
};

function getCookie(name: string): string | undefined {
  console.log("tonylee getCookie");
  const parts = document.cookie.split(name + "=");
  if (parts.length === 2) return parts.pop()?.split(";").shift();
}

onMounted(async () => {
  console.log("tonylee onMounted");
  await loadKakaoSDK();
  displayToken();
  // handleLogin();
});

onIonViewWillEnter(() => {
  console.log("tonylee onIonViewWillEnter");
  // displayToken();
});
</script>
