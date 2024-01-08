document.addEventListener('DOMContentLoaded', function () {
    const texts = ['Autonomously Improve Safety', 'Enhanced Cleaning Routines', 'EPA Approved Technologies', 'Ultraviolet (UV)-C Radiation', 'Customized Quotes', 'Sanitization Assessment'];
  
    let index = 0;
    let isDeleting = false;
    let delay = 2000; // Tiempo de espera entre ciclos
  
    function type() {
      const currentText = texts[index];
      const textElement = document.getElementById('text');
  
      if (isDeleting) {
        textElement.textContent = currentText.substring(0, textElement.textContent.length - 1);
      } else {
        textElement.textContent = currentText.substring(0, textElement.textContent.length + 1);
      }
  
      let typeSpeed = 200; // Velocidad de escritura
  
      if (isDeleting) {
        typeSpeed /= 2; // Velocidad de borrado más rápida
      }
  
      // Verifica si ha completado la escritura o el borrado
      if (!isDeleting && textElement.textContent === currentText) {
        isDeleting = true;
        typeSpeed = delay; // Tiempo de espera antes de borrar
      } else if (isDeleting && textElement.textContent === '') {
        isDeleting = false;
        index = (index + 1) % texts.length; // Avanza al siguiente texto
        typeSpeed = 500; // Tiempo de espera antes de escribir el siguiente texto
      }
  
      setTimeout(type, typeSpeed);
    }
  
    setTimeout(type, 500); // Inicia la animación después de un breve tiempo


    const text = ['Elite\'s Safety Standard helps foster a safe enviroment to better serve our communities', 'Learn More about our FREE Commercial Maintenance Services for all new clients when signing up with Elite Cleaning Concepts'];
  let key = 0;

  function changeText() {
    const textElement1 = document.getElementById('text1');
    const textElement2 = document.getElementById('text2');

    if (key === text.length - 1) {
      key = 0;
    } else {
      key++;
    }

    textElement1.classList.add('text-shrink');
    setTimeout(() => {
      textElement1.classList.add('hidden');
      textElement2.textContent = text[key];
      textElement2.classList.remove('hidden');
      textElement1.classList.remove('text-shrink');
    }, 500);
    
    setTimeout(() => {
      textElement2.classList.remove('text-shrink');
    }, 1000);

    setTimeout(changeText, 4000); // Cambia de texto cada 4 segundos
  }

  setTimeout(changeText, 0); // Inicia la animación después de la carga inicial
});


  