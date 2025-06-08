function verificarCodigo() {
  const codigoCorreto = "09051206";
  const codigoDigitado = document.getElementById("codigoInput").value;

  if (codigoDigitado == codigoCorreto) {
    window.location.href = "surpresa.html";
  }
  else {
    document.getElementById("mensagemErro").innerText = "Hmm... tenta de novo minha florzinha! 💖";
  }
}

// Konami Code sequence
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
    const key = e.key;
    const requiredKey = konamiCode[konamiCodePosition];

    if (key === requiredKey) {
        konamiCodePosition++;
        if (konamiCodePosition === konamiCode.length) {
            activateKonamiCode();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function activateKonamiCode() {
    const hearts = ['💖', '💝', '💗', '💓', '💕'];
    let isRaining = true;

    // Show special message
    const messageDiv = document.createElement('div');
    messageDiv.textContent = "Você descobriu um segredinho, te amo ❤️";
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '50%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.background = 'rgba(255, 182, 193, 0.9)';
    messageDiv.style.padding = '20px';
    messageDiv.style.borderRadius = '10px';
    messageDiv.style.boxShadow = '0 0 20px rgba(214, 51, 132, 0.3)';
    messageDiv.style.zIndex = '2000';
    messageDiv.style.fontSize = '24px';
    messageDiv.style.fontWeight = 'bold';
    messageDiv.style.color = '#d63384';
    messageDiv.style.animation = 'fadeInOut 5s forwards';
    document.body.appendChild(messageDiv);

    const rainHearts = () => {
        if (!isRaining) return;
        
        const heart = document.createElement('div');
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.fontSize = '24px';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '-30px';
        heart.style.animation = 'rain 3s linear';
        heart.style.zIndex = '1000';
        document.body.appendChild(heart);

        setTimeout(() => {
            document.body.removeChild(heart);
        }, 3000);

        // Create a new heart every 100ms
        setTimeout(rainHearts, 100);
    };

    // Start the rain
    rainHearts();

    // Stop after 5 seconds
    setTimeout(() => {
        isRaining = false;
        document.body.removeChild(messageDiv);
    }, 5000);
}

// Secret message system
let clickCount = 0;
document.addEventListener('click', function(e) {
    if (e.ctrlKey) {
        clickCount++;
        if (clickCount === 3) {
            showSecretMessage();
            clickCount = 0;
        }
    }
});

function showSecretMessage() {
    const messages = [
        "Você é meu raio de sol! ☀️",
        "Te amo mais que chocolate! 🍫",
        "Você me faz sorrir todo dia! 😊",
        "Meu coração é seu! 💖"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    const messageDiv = document.createElement('div');
    messageDiv.textContent = randomMessage;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '50%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.background = '#ffb6c1';
    messageDiv.style.padding = '20px';
    messageDiv.style.borderRadius = '10px';
    messageDiv.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
    messageDiv.style.zIndex = '1000';
    messageDiv.style.animation = 'fadeInOut 3s forwards';
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        document.body.removeChild(messageDiv);
    }, 3000);
}