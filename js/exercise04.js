function randomHexColorCode ()
{
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0,6);
}

const randomHexColorCode2 = () => '#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
console.log(randomHexColorCode());
console.log(randomHexColorCode2());