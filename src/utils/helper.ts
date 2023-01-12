export function isPC(): boolean {
  const ua = navigator.userAgent;
  const isSp =
    ua.indexOf("iPhone") > -1 ||
    (ua.indexOf("Android") > -1 && ua.indexOf("Mobile") > -1);
  const isPc = !isSp;
  return isPc;
}
