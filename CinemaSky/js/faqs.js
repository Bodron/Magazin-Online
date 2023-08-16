const toggles1 = document.querySelectorAll('.faq-toggle')

toggles1.forEach((toggle1) => {
  toggle1.addEventListener('click', () => {
    toggle1.parentNode.classList.toggle('active')
  })
})
