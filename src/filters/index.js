export function changeUrl(str) {
  return str.replace(/^https:\/\/[^/]+/, "img");
}
export function randomKey() {
  const keyStr = parseInt(Math.random() * (999999 - 100000) + 100000);
  return keyStr;
}
export function filTime(nS) {
  return new Date(parseInt(nS) * 1000)
    .toLocaleString()
    .replace(/年|月/g, "-")
    .replace(/日/g, " ");
}
