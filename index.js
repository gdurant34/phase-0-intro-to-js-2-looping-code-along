function writeCards(names, event) {
    let newArr = [];
    for(let i = 0; i < names.length; i++) {
        let name = names[i];
        // console.log(name, event);
        let msg = `Thank you, ${name}, for the wonderful ${event} gift!`
        newArr.push(msg);
        // console.log(msg);
    }
    // console.log(newArr);
    return newArr;
};

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i--);
    }
    // i--;
}

countDown(10);