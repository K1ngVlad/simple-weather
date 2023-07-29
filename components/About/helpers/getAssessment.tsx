const getAssessment = (uv: number) => {
  if (uv < 3) {
    return 'Низкий';
  } else if (uv < 6) {
    return 'Умеренный';
  } else if (uv < 8) {
    return 'Высокий';
  } else if (uv < 11) {
    return 'Очень высокий';
  } else {
    return 'Чрезмерный';
  }
};

export { getAssessment };
