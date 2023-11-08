
// armazena a seleçao do elemento com a classe digital
let digitalElement = document.querySelector('.digital');
// armazena a seleçao do elemento com a classe p_s
let sElement = document.querySelector('.p_s');
// armazena a seleçao do elemento com a classe p_m
let mElement = document.querySelector('.p_m');
// armazena a seleçao do elemento com a classe p_h
let hElement = document.querySelector('.p_h');

//inicia a função updateClock
function updateClock() {
    // armazena na variavel now um new Date(função que pega a hora em tempo real)
    let now = new Date();

    // armazena na variavel hour a hora adquirida na variavel now(now.getHours)
    let hour = now.getHours();

    // armazena na variavel hDeg o grau compativel com a hora da variavel hour
    let hDeg = ((360 / 12) * hour) - 90; // ((360 -> possibilidade de giro do ponteiro % 12 -> quantidade de horas nessas 360) * hour -> variavel da hora atual) - 90 para corrigir o grau padrão do ponteiro que começa 90 graus a mais 

    // armazena na variavel minute o minuto adquirido na variavel now(now.getMinutes)
    let minute = now.getMinutes();

    // armazena na variavel mDeg o grau compativel com o minuto atual da variavel minute
    let mDeg = ((360 / 60) * minute) - 90; // ((360 -> possibilidade de giro do ponteiro % 60 -> quantidade de minutos nessas 360) * minute -> variavel do minuto atual) - 90 para corrigir o grau padrão do ponteiro que começa 90 graus a mais 

    // armazena na variavel second o segundo adquirido na variavel now(now.getSeconds)
    let second = now.getSeconds();

    // armazena na variavel sDeg o grau compativel com o segundo atual da variavel second
    let sDeg = ((360 / 60) * second) - 90; // ((360 -> possibilidade de giro do ponteiro % 60 -> quantidade de segundos nessas 360) * second -> variavel do segundo atual) - 90 para corrigir o grau padrão do ponteiro que começa 90 graus a mais 

    // insere no html da variavel digitalElement o seguinte template string com a função fixZero em cada variavel
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    // altera o style transform do elemento da variavel sElement para rotate(sDeg(variavel de graus do ponteiro de segundos atual)deg)
    sElement.style.transform = `rotate(${sDeg}deg)`;
    
    // altera o style transform do elemento da variavel mElement para rotate(sDeg(variavel de graus do ponteiro de minutos atual)deg)
    mElement.style.transform = `rotate(${mDeg}deg)`;

    // altera o style transform do elemento da variavel hElement para rotate(sDeg(variavel de graus do ponteiro de horas atual)deg)
    hElement.style.transform = `rotate(${hDeg}deg)`;

} // termina a função updateClock

// inicia a função fixZero
function fixZero(time) {
    return time < 10 ? `0${time}` : time; // condicinal, caso time(parametro recebido) for menor que 10, então deverá ser `0${time}`, caso contrário, apenas time;
}

// executa a função setInterval que irá executar a função updateClock a cada 1000ms
setInterval(updateClock, 1000); 

// executa a função updateClock() ao iniciar a página;
updateClock();