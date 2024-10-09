export default function calcPercent(voteAverage) {
    const result = (voteAverage / 10) * 100;
    return Math.floor(result);
}
