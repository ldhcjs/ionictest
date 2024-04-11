<template>
  <div id="naver_id_login"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

function loadScript(src: string, id: string) {
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

    const naver_id_login = new (window as any).naver_id_login('YOUR_CLIENT_ID', 'YOUR_CALLBACK_URL');
    const state = naver_id_login.getUniqState();
    naver_id_login.setButton("white", 2, 40);
    naver_id_login.setDomain("YOUR_SERVICE_URL");
    naver_id_login.setState(state);
    naver_id_login.setPopup();
    naver_id_login.init_naver_id_login();
  } catch (error) {
    console.error('Script loading failed:', error);
  }
});

onUnmounted(() => {
  const naverLoginScript = document.getElementById('naver-login-sdk');
  naverLoginScript?.parentNode?.removeChild(naverLoginScript);
  const jqueryScript = document.getElementById('jquery');
  jqueryScript?.parentNode?.removeChild(jqueryScript);
});
</script>
