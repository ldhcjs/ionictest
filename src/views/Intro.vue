<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Intro Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-progress-bar type="indeterminate"></ion-progress-bar>
      <ion-img src="https://ionic-docs-demo-v7.vercel.app/assets/madison.jpg"
        alt="The Wisconsin State Capitol building in Madison, WI at night" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { IonProgressBar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonProgressBar },
});
</script>
