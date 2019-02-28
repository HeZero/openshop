/**
 * @for 判断浏览器类型
 * @return {Object}
* */
export const browser = () => {
  const u = navigator.userAgent
  return {
    mobile: !!u.match(/AppleWebKit.*Mobile.*/),
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    android: u.indexOf('Android') > -1 && u.indexOf('Linux') > -1,
    iPhone: u.indexOf('iPhone') > -1,
    iPad: u.indexOf('iPad') > -1,
    weixin: u.indexOf('MicroMessenger') > -1,
    qq: u.match(/\sQQ/i) === ' qq'
  }
}

export const formDate = (timestamp, isTime = true) => {
  let date = new Date(timestamp * 1000)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let minute = date.getMinutes()
  let second = date.getSeconds()
  let h = date.getHours()
  let d = date.getDate()
  m = m < 10 ? ('0' + m) : m
  d = d < 10 ? ('0' + d) : d
  h = h < 10 ? ('0' + h) : h
  minute = minute < 10 ? ('0' + minute) : minute
  second = second < 10 ? ('0' + second) : second
  if (isTime) {
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
  } else {
    return y + '-' + m + '-' + d
  }
}
