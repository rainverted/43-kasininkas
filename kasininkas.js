async function kasininkas(price, cash) {
    console.log(`Priimtos kupiuros: ${cash.join(', ')}.`);

    let total = 0;
    for (const number of cash) {
        total += number;
    }

    let answer = '';
    if (total < price) {
        answer = 'Nepakanka pinigu!\n';
    } else if (total === price) {
        answer = 'Aciu, jog pirkote!\n';
    } else {
        answer = `Aciu, jog pirkote! Stai jusu graza - ${total - price} pinigu!\n`;
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(answer);
        }, 2000);
    })
}

module.exports = kasininkas;