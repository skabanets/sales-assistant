export const getScoreColor = (score: number): string => {
  switch (true) {
    case score >= 0 && score <= 19:
      return "score.low";
    case score >= 20 && score <= 39:
      return "score.midLow";
    case score >= 40 && score <= 59:
      return "score.mid";
    case score >= 60 && score <= 79:
      return "score.midHigh";
    case score >= 80 && score <= 100:
      return "score.high";
    default:
      return "score.low";
  }
};
