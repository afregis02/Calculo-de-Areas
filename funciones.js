document.getElementById('votoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const seccion = document.getElementById('seccion').value;
    const imagenResultado = document.getElementById('imagenResultado');
    const calcularDiv = document.getElementById('calcular');
    const medidaInput = document.getElementById('medida');
    const resultadoArea = document.getElementById('resultadoArea');
    const alturaDiv = document.getElementById('alturaDiv');
    const alturaInput = document.getElementById('altura');

    let imagenSrc;
    switch (seccion) {
        case 'cuadrado':
            imagenSrc = 'img/1.png';
            alturaDiv.classList.add('hidden'); // Oculta el campo de altura
            alturaInput.removeAttribute('required');
            break;
        case 'triangulo':
            imagenSrc = 'img/2.png';
            alturaDiv.classList.remove('hidden'); // Muestra el campo de altura
            alturaInput.setAttribute('required', 'required');
            break;
        case 'circulo':
            imagenSrc = 'img/3.webp';
            alturaDiv.classList.add('hidden'); // Oculta el campo de altura
            alturaInput.removeAttribute('required');
            break;
        default:
            imagenSrc = '';
            break;
    }

    imagenResultado.src = imagenSrc;
    imagenResultado.alt = `Imagen de ${seccion}`;

    medidaInput.value = '';
    alturaInput.value = '';
    resultadoArea.innerText = '';
    resultadoArea.classList.add('hidden');

    calcularDiv.classList.remove('hidden');
});

function calcular() {
    const seccion = document.getElementById('seccion').value;
    const medida = parseFloat(document.getElementById('medida').value);
    let area;

    if (isNaN(medida) || medida <= 0) {
        alert('Por favor, ingrese una medida válida.');
        return;
    }

    switch (seccion) {
        case 'cuadrado':
            area = medida * medida;
            break;
        case 'triangulo':
            const altura = parseFloat(document.getElementById('altura').value);
            if (isNaN(altura) || altura <= 0) {
                alert('Por favor, ingrese una altura válida.');
                return;
            }
            area = 0.5 * medida * altura;
            break;
        case 'circulo':
            area = Math.PI * medida * medida;
            break;
        default:
            area = 0;
            break;
    }

    const resultadoArea = document.getElementById('resultadoArea');
    resultadoArea.innerText = `Área: ${area.toFixed(2)}`;
    resultadoArea.classList.remove('hidden');
}

