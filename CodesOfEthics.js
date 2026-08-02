document.addEventListener('DOMContentLoaded', () => {
    const btnCompromiso = document.getElementById('btnCompromiso');
    if (btnCompromiso) {
        btnCompromiso.addEventListener('click', () => {
            alert('¡Compromiso ético validado con éxito!');
            btnCompromiso.textContent = '¡Compromiso Registrado ✓!';
            btnCompromiso.classList.add('btn-exito');
            btnCompromiso.disabled = true;
        });
    }
});
