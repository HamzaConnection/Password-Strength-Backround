
const password = document.getElementById('password')
const bg = document.querySelector('.background')



password.addEventListener('input', (e) => {
    passwordLength = e.target.value.length
    bg.style.filter = `blur(${20 - passwordLength * 2}px)`
})