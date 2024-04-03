<template>
  <ion-card>
    <ion-card-header>
      <ion-item class="no-padding-start-end" lines="none" >
        <ion-icon :icon="atCircle" size="large" />
        <ion-card-title class="margin-start-8px">Class Title</ion-card-title>
      </ion-item>
    </ion-card-header>
    <ion-card-content>
      <ion-grid>
        <ion-row class="center-align margin-bottom-12px background_rgb_254_248_244 rounded-item">
          <ion-icon :icon="heart" class="icon-size-48px" />
          <ion-col />
          <!-- 사이 여백용 -->
          <ion-label class="font-size-24px">김 골프</ion-label>
          <ion-col />
        </ion-row>
        <ion-row class="center-align margin-bottom-12px">
          <!-- 사이 여백용 -->
          <ion-icon :icon="calendarOutline" size="large" />
          <ion-col />
          <!-- 사이 여백용 -->
          <ion-label>2024-03-29</ion-label>
          <ion-col />
          <!-- 사이 여백용 -->
          <ion-icon :icon="diamond" size="large" />
          <ion-col />
          <!-- 사이 여백용 -->
          <ion-label>500,000</ion-label>
        </ion-row>
        <ion-row class="center-align margin-bottom-12px background_rgb_254_248_244 rounded-item">
          <ion-col size="auto">
            <ion-row>
              <ion-icon :icon="airplane" size="large" />
            </ion-row>
            <ion-row class="center-align">
              <ion-label>서울</ion-label>
            </ion-row>
          </ion-col>
          <ion-col>
            <ion-row class="center-align">
              <ion-icon :icon="bag" size="large" />
            </ion-row>
            <ion-row class="center-align">
              <ion-label>100</ion-label>
            </ion-row>
          </ion-col>
          <ion-col size="auto">
            <ion-row class="center-align">
              <ion-icon :icon="basket" size="large" />
            </ion-row>
            <ion-row class="center-align">
              <ion-label>90</ion-label>
            </ion-row>
          </ion-col>
          <ion-col>
            <ion-row class="center-align">
              <ion-icon :icon="book" size="large" />
            </ion-row>
            <ion-row class="center-align">
              <ion-label>혼성</ion-label>
            </ion-row>
          </ion-col>
          <ion-col size="auto">
            <ion-row>
              <ion-icon :icon="cart" size="large" />
            </ion-row>
            <ion-row class="center-align">
              <ion-label>1/3</ion-label>
            </ion-row>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonGrid,
  IonLabel,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonRow,
  IonIcon,
  IonCardTitle,
  IonItem
} from "@ionic/vue";
import {
  heart,
  calendarOutline,
  airplane,
  bag,
  basket,
  book,
  cart,
  atCircle,
  diamond,
  people
} from "ionicons/icons";
</script>

<style scoped>
ion-grid {
  padding: 0px;
}
</style>
