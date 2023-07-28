const getAssessment = (index: number) => {
  if (index < 4) {
    return 'Низкое';
  } else if (index < 7) {
    return 'Умеренное';
  } else if (index < 10) {
    return 'Высокое';
  } else {
    return 'Очень высокое';
  }
};

export { getAssessment };
