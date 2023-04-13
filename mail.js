const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_wklnind';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar consulta';
      alert('Enviado con exito!');
    }, (err) => {
      btn.value = 'Enviar consulta';
      alert(JSON.stringify(err));
    });
});