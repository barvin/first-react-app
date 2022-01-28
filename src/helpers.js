export const shuffleAnswers = (question) => {
  const unshuffledAnswers = [question.correctAnswer, ...question.incorrectAnswers];

  return unshuffledAnswers.map((answer) => ({
      sort: Math.random(),
      value: answer,
  }))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value);
};

export const normalizeQuestions = (questions) => {
  return questions.map((q) => ({
    question: decodeURIComponent(q.question),
    correctAnswer: decodeURIComponent(q.correct_answer),
    incorrectAnswers: q.incorrect_answers.map((a) => decodeURIComponent(a)),
  }));
};
