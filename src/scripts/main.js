AOS.init();

const dataDoEvento = new Date("nov 1, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();


const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaDoEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMS = 1000 * 60 * 60 * 24;
    const horaEmMS = 1000 * 60 * 60;
    const minutosEmMS = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaDoEvento / diasEmMS);
    const horasAteOEvento = Math.floor((distanciaDoEvento % diasEmMS) / horaEmMS);
    const  minutosAteOEvento = Math.floor((distanciaDoEvento % horaEmMS) / minutosEmMS);
    const segundoAteOEvento = Math.floor((distanciaDoEvento % minutosEmMS) / 1000);
    
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundoAteOEvento}s`

    if (distanciaDoEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);