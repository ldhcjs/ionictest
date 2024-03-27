<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="chat-container">
        <!-- A 리스트뷰 데이터를 화면에 표시 -->
        <template v-for="(item, index) in AListView" :key="index">
          <div class="message left" v-if="item.type === 'question'">
            {{ item.text }}
            <div class="options" v-if="!item.answered">
              <ion-button v-for="option in item.options" :key="option" @click="handleAnswer(index, option)">
                {{ option }}
              </ion-button>
            </div>
          </div>
          <div class="message right" v-if="item.type === 'answer'">
            {{ item.text }}
          </div>
        </template>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import { ref } from 'vue';

export default {
  setup() {
    // Q 리스트뷰 (서버에서 받은 질문 - 답변 쌍)
    const QList = ref([
      {
        id: 1,
        text: '가장 좋아하는 계절은 무엇인가요?',
        options: ['봄', '여름', '가을', '겨울'],
        answered: false
      },
      {
        id: 2,
        text: '커피를 선호하시나요, 차를 선호하시나요?',
        options: ['커피', '차', '둘 다', '둘 다 아님'],
        answered: false
      },
      // 추가 질문들...
    ]);

    // A 리스트뷰 (화면에 표시될 데이터)
    const AListView = ref([]);

    // 첫 번째 질문을 A 리스트뷰에 추가
    AListView.value.push({
      ...QList.value[0],
      type: 'question'
    });

    function handleAnswer(questionIndex, option) {
      // 답변을 A 리스트뷰에 추가
      AListView.value.push({
        id: AListView.value.length + 1,
        text: option,
        type: 'answer'
      });

      // 현재 질문에 답변됨 표시
      AListView.value[questionIndex].answered = true;

      // 다음 질문을 A 리스트뷰에 추가
      let nextQuestion = QList.value.find(q => q.id === AListView.value[questionIndex].id + 1);
      if (nextQuestion) {
        AListView.value.push({
          ...nextQuestion,
          type: 'question'
        });
      }
    }

    return { AListView, handleAnswer };
  }
};
</script>

<style>
.chat-container {
  display: flex;
  flex-direction: column;
}
.message {
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
}
.left {
  align-self: flex-start;
  background-color: #e5e5ea;
}
.right {
  align-self: flex-end;
  background-color: #007aff;
  color: white;
}
.options {
  display: flex;
  flex-wrap: wrap;
}
</style>
