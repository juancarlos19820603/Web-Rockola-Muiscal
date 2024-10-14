

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_zymgqji';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('Mensaje Enviado!');
      document.getElementById('form').reset(); // Reinicia los campos del formulario
      
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
     
    });
});
