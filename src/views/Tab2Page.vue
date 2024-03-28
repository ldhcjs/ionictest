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
            <div class="options">
              <ion-button v-for="option in item.options" :key="option"
              :disabled="item.answered"
              @click="handleAnswer(index, option)"
              :class="{ selected: item.selectedOption === option }">
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

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import { ref } from 'vue';

// 질문 타입 정의
type QAItem = {
  id: number;
  text: string;
  options?: string[];
  answered: boolean;
  type: 'question' | 'answer';
  selectedOption?: string; // 선택된 답변을 추적하기 위한 필드
};

// Q 리스트뷰 (서버에서 받은 질문 - 답변 쌍)
const QList = ref<QAItem[]>([
  {
    id: 1,
    text: '가장 좋아하는 계절은 무엇인가요?',
    options: ['봄', '여름', '가을', '겨울'],
    answered: false,
    type: 'question' // 이 부분 추가
  },
  {
    id: 2,
    text: '커피를 선호하시나요, 차를 선호하시나요?',
    options: ['커피', '차', '둘 다', '둘 다 아님'],
    answered: false,
    type: 'question' // 이 부분 추가
  },
  {
    id: 3,
    text: '책이 좋아 게임이 좋아?',
    options: ['책', '게임', '산책', '셋 다 아님'],
    answered: false,
    type: 'question' // 이 부분 추가
  },
  // 추가 질문들...
]);

// A 리스트뷰 (화면에 표시될 데이터)
const AListView = ref<QAItem[]>([]);

// 첫 번째 질문을 A 리스트뷰에 추가
AListView.value.push(QList.value[0]);

// 답변 처리 함수
function handleAnswer(questionIndex: number, option: string) {
  // 답변을 A 리스트뷰에 추가
  AListView.value.push({
    id: AListView.value.length + 1,
    text: option,
    type: 'answer', // 타입 명시
    answered: true // 답변됨으로 설정
  });

  // 현재 질문에 답변됨 표시
  AListView.value[questionIndex].answered = true;
  AListView.value[questionIndex].selectedOption = option; // 선택된 옵션 저장

  // 다음 질문을 A 리스트뷰에 추가, 옵셔널 체이닝을 사용하여 안전하게 다음 요소 접근
  const nextQuestion = QList.value.find(q => q.id === AListView.value[questionIndex].id + 1);
  if (nextQuestion) {
    AListView.value.push({
      ...nextQuestion,
      type: 'question' // 이미 정의되어 있으므로 변경 필요 없음
    });
  }
}
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
.options ion-button {
  margin-top: 4px;
}
.selected {
  --background: skyblue;
}
</style>
