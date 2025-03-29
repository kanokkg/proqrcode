const scriptURL = 'https://script.google.com/macros/s/AKfycbwT4h9Ulegv3kaENKWK25pF2sVVOL0d2ZICb9L1FJK4c2iztUVwhex4VFCa-m3_07AE/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("ขอบคุณสำหรับ สแกนโปร 10 แถม 1 ครับ !!!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})