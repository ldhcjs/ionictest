<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Edit Information</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item-divider>My Photos</ion-item-divider>
        <div class="photos-container">
          <ion-avatar v-for="(photo, index) in photos" :key="index" class="photo-item" @click="uploadPhoto(index)">
            <img v-if="photo" :src="photo" alt="photo">
            <ion-icon v-else name="cloud-upload-outline"></ion-icon>
          </ion-avatar>
        </div>
        
        <ion-item-divider>One Line Intro</ion-item-divider>
        <ion-item>
          <ion-textarea v-model="oneLineIntro" placeholder="How about golfing with me?" maxlength="30"></ion-textarea>
          <div class="char-count">{{ oneLineIntro.length }}/30</div>
        </ion-item>

        <ion-item-divider>About Me</ion-item-divider>
        <ion-item>
          <ion-textarea v-model="aboutMe" placeholder="Tell us more about yourself!" maxlength="200"></ion-textarea>
          <div class="char-count">{{ aboutMe.length }}/200</div>
        </ion-item>

        <ion-item-divider>Basic Information</ion-item-divider>
        <ion-item button @click="navigateTo('gender')">
          <ion-label>Gender</ion-label>
          <ion-note slot="end">{{ gender }}</ion-note>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </ion-item>
        <ion-item button @click="navigateTo('region')">
          <ion-label>Primary Region</ion-label>
          <ion-note slot="end">{{ region }}</ion-note>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </ion-item>
        <ion-item button @click="navigateTo('email')">
          <ion-label>Email</ion-label>
          <ion-note slot="end">{{ email }}</ion-note>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </ion-item>

        <ion-item-divider>My Golf Information</ion-item-divider>
        <ion-item button @click="navigateTo('fieldExperience')">
          <ion-label>Field Experience</ion-label>
          <ion-note slot="end">{{ fieldExperience }}</ion-note>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </ion-item>
        <ion-item button @click="navigateTo('averageScore')">
          <ion-label>Average Score</ion-label>
          <ion-note slot="end">{{ averageScore }}</ion-note>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </ion-item>
      </ion-list>
      
      <div class="button-container">
        <ion-button expand="full" @click="preview">Preview</ion-button>
        <ion-button expand="full" @click="save">Save</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { 
  IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, 
  IonList, IonItemDivider, IonItem, IonLabel, IonTextarea, IonNote, IonIcon, IonButton, IonAvatar 
} from '@ionic/vue';

const router = useRouter();

const photos = ref<(string | null)[]>([null, null, null, null]);
const oneLineIntro = ref('');
const aboutMe = ref('');
const gender = ref('Male');
const region = ref('Seoul, Gangseo/Mapo');
const email = ref('example@example.com');
const fieldExperience = ref('Less than 5 times');
const averageScore = ref('Over 100');

const uploadPhoto = async (index: number) => {
  const image = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Prompt,
    quality: 90
  });
  photos.value[index] = image.webPath || null;
};

const navigateTo = (path: string) => {
  router.push({ path: `/${path}` });
};

const preview = () => {
  alert('Preview function to be implemented');
};

const save = () => {
  alert('Information saved');
  // Implement save logic here
};
</script>

<style scoped>
.photos-container {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.photo-item {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 50%;
}
.char-count {
  font-size: 12px;
  color: gray;
  text-align: right;
  width: 100%;
  margin-top: -10px;
}
.button-container {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}
</style>
