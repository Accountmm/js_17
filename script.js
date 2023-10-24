let a = +prompt("how many squares you want to be")
while (isNaN(a) || a == 0 ) {
    a = +prompt("how many squares !!")
}
if (a % 2 == 0) {
  a = a + 1
}
box = ""
for (let i = 0; i < a; i++) {
    for (let q = 0; q < a; q++) {
        // if (typeof a == !isNaN) {
        if (q == i || i == 0 || q == 0 || i == (a - 1) || q == (a - 1) || (i + q) == (a - 1)) {
            box += "⬛"
        } else {
            box += "⬜"
        }

    }

    // else{
    // alert('error')
    // }
    console.log(box);
    box = ""

}
// i % 2 == 0 && q % 2 == 0 && i % 2 == 1  && q % 2 == 1|| q % 2 == 1 && i % 2 == 1 && i % 2 == 0 && q % 2 == 0