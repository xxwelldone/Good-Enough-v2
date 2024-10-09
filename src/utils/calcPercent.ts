export default function calcPercent(voteAverage: number) {
  const result = (voteAverage / 10) * 100;
  return Math.floor(result);
}
