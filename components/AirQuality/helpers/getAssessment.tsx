const getAssessment = (index: number) => {
  if (index < 25) {
    return 'Очень хорошее';
  } else if (index < 50) {
    return 'Хорошее';
  } else if (index < 75) {
    return 'Среднее';
  } else if (index < 100) {
    return 'Плохое';
  }
  return 'Очень плохое';
};

export { getAssessment };
