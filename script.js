document.addEventListener('DOMContentLoaded', function() {
  const animatedText = document.querySelector('.animated-text');
  animatedText.style.animation = 'textFadeIn 1s forwards'; 
});

// Script untuk interaktivitas 
document.querySelector('.button').addEventListener('click', function() {
  alert('Anda akan diarahkan ke halaman tes kepribadian!');
});
