let state = {
  questions: [
    {
      questionTitle: 'Питання 1: ',
      question: 'Столиця України?',
      variants: ['Київ', 'Одеса', 'Львів'],
      answer: 0,
      nextStep: 'Далі',
    },
    {
      questionTitle: 'Питання 2: ',
      question: 'Столиця Іспанії?',
      variants:['Валенсія', 'Барселона', 'Мадрид'] ,
      answer: 2,
      nextStep: 'Далі',
    },
    {
      questionTitle: 'Питання 3: ',
      question: 'Столиця Турції?',
      variants:['Стамбул', 'Анкара', 'Кемер'] ,
      answer: 1,
      nextStep: 'Далі',
    },
    {
      questionTitle: 'Питання 4: ',
      question: 'Столиця США?',
      variants:['Сан-Франциско', 'Нью-Йорк', 'Вашингтон'] ,
      answer: 2,
      nextStep: 'Результат',
      },
  ]
}

export default state