<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>네이버 로그인 정보</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item>
          <ion-label>Token: {{ userProfile.token }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Email: {{ userProfile.email }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Phone: {{ userProfile.phone }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Age: {{ userProfile.age }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/vue';
import { ref, onMounted, onUnmounted } from 'vue';

interface UserProfile {
  token: string;
  email: string;
  phone: string;
  age: string;
}

const userProfile = ref<UserProfile>({ token: '', email: '', phone: '', age: '' });

declare global {
  interface Window {
    naverSignInCallback: () => void;
  }
}

function loadScript(src: string, id: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve(src);
      return;
    }
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.id = id;
    script.onload = () => resolve(src);
    script.onerror = () => reject(new Error(`Failed to load script ${src}`));
    document.head.appendChild(script);
  });
}

onMounted(async () => {
  try {
    await loadScript('https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js', 'naver-login-sdk');
    await loadScript('http://code.jquery.com/jquery-1.11.3.min.js', 'jquery');

    const naver_id_login = new (window as any).naver_id_login('NmCqXn1xN_tFIxS3uANo', 'http://localhost:8100/naverLoginCallback/');
    userProfile.value.token = naver_id_login.oauthParams.access_token;

    naver_id_login.get_naver_userprofile("naverSignInCallback()");

    window.naverSignInCallback = () => {
      userProfile.value.email = naver_id_login.getProfileData('email');
      userProfile.value.phone = naver_id_login.getProfileData('phone');
      userProfile.value.age = naver_id_login.getProfileData('age');
    };

  } catch (error) {
    console.error('Script loading failed:', error);
  }
});

onUnmounted(() => {
  const naverLoginScript = document.getElementById('naver-login-sdk');
  if (naverLoginScript) naverLoginScript.parentNode?.removeChild(naverLoginScript);
  const jqueryScript = document.getElementById('jquery');
  if (jqueryScript) jqueryScript.parentNode?.removeChild(jqueryScript);
});
</script>
