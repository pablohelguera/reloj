function actualizarHora() {
    let fecha = new Date(),
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();

    let pHoras = document.getElementById('horas'),
        pMinutos = document.getElementById('minutos'),
        psegundos = document.getElementById('segundos'),
        pDiaSemana = document.getElementById('diaSemana'),
        pNumDia = document.getElementById('numDia'),
        pMes = document.getElementById('mes'),
        pAnio = document.getElementById('anio');

    let semanas = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    pDiaSemana.innerHTML = semanas[fecha.getDay()];

    pNumDia.innerHTML = fecha.getDate();

    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    pMes.innerHTML = meses[fecha.getMonth()];
    pAnio.innerHTML = fecha.getFullYear();

    //asignar las horas, minutos y seg
    if (horas < 10) {
        horas = '0' + horas;
    }

    if (minutos < 10) {
        minutos = '0' + minutos;
    }

    if (segundos < 10) {
        segundos = '0' + segundos;
    }

    pHoras.innerHTML = horas;
    pMinutos.innerHTML = minutos;
    psegundos.innerHTML = segundos;
}

window.setInterval(actualizarHora, 1000);

function cambiarColor(color) {
    let section = document.getElementsByTagName('section')
    console.log(section)

    if (color == 'verde') {
        section[0].className = 'w-75 green'
    }

    if (color == 'azul') {
        section[0].className = 'w-75 blue'
    }

    if (color == 'rosa') {
        section[0].className = 'w-75 pink'
    }
}