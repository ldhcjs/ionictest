<template>
  <ion-card class="rounded-item">
    <ion-grid>
      <ion-row>
        <ion-col size="4.5" class="no-padding">
          <ion-img
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
            class="custom-img-obj-fit-cover"
          />
        </ion-col>
        <ion-col class="padding-inline-start-20px">
          <ion-item class="no-padding-start-end" lines="none">
            <ion-label>
              <h1 class="margin-bottom-0px">프로명</h1>
            </ion-label>
            <ion-icon :icon="bookmark" size="large" />
          </ion-item>

          <ion-item class="--min-height-0px no-padding-start-end" lines="none">
            <ion-label class="margin-top-bottom-4px">소속</ion-label>
            <ion-label slot="end" class="margin-top-bottom-4px">KPGA</ion-label>
          </ion-item>

          <ion-item class="--min-height-0px no-padding-start-end" lines="none">
            <ion-label class="margin-top-bottom-4px">지역</ion-label>
            <ion-label slot="end" class="margin-top-bottom-4px">서울</ion-label>
          </ion-item>

          <ion-item class="--min-height-0px no-padding-start-end" lines="none">
            <ion-label class="margin-top-bottom-4px">평균레슨비용</ion-label>
            <ion-label slot="end" class="margin-top-bottom-4px">300,000</ion-label>
          </ion-item>

          <ion-item class="--min-height-0px no-padding-start-end" lines="none">
            <ion-chip color="success">신규</ion-chip>
            <ion-chip color="warning">인기</ion-chip>
            <ion-badge color="primary" slot="end">9.5</ion-badge>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row class="margin-top-bottom-12px center-align">
        <ion-label>레슨을 통해 필드의 즐거움을 느껴보세요!</ion-label>
      </ion-row>
    </ion-grid>
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
  IonItem,
  IonImg,
  IonChip,
  IonBadge
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
  people,
  bookmark,
} from "ionicons/icons";
</script>

<style scoped>
ion-grid {
  padding: 0px;
}
</style>
