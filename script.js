const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('you have not signed-in yet!', 'danger')
  })
}
// alert 2

const alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2')
const appendAlert2 = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder2.append(wrapper)
}

const alertTrigger2 = document.getElementById('liveAlertBtn2')
if (alertTrigger2) {
  alertTrigger2.addEventListener('click', () => {
    appendAlert('you have not signed-in yet!', 'danger')
  })
}
// alert 3
const alertPlaceholder3 = document.getElementById('liveAlertPlaceholder3')
const appendAlert3 = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder3.append(wrapper)
}

const alertTrigger3 = document.getElementById('liveAlertBtn3')
if (alertTrigger3) {
  alertTrigger3.addEventListener('click', () => {
    appendAlert('you have not signed-in yet!', 'danger')
  })
}
// alert 4
const alertPlaceholder4 = document.getElementById('liveAlertPlaceholder4')
const appendAlert4 = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder4.append(wrapper)
}

const alertTrigger4 = document.getElementById('liveAlertBtn4')
if (alertTrigger4) {
  alertTrigger4.addEventListener('click', () => {
    appendAlert('you have not signed-in yet!', 'danger')
  })
}