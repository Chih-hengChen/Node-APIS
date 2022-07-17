function books() {
    const book = '我是一本书';

    function inbook() {
        console.log("inbook函数输出" + book);
    }
    inbook();
    console.log("books函数输出" + book);

    return function() {
        console.log(book);
    }
}
books();
// console.log(books());
console.log("-------------");
const res = books();
console.log(res);
res();
console.log("-------------");

for (var i = 0; i < 5; i ++) {
    setTimeout(function() {
        console.log(i ++);
    }, 4000)
}
console.log(i);

console.log("-------------");
// 立即执行函数
for (var i = 0; i < 5; i ++) {
    (function(x) {
        setTimeout(function() {
            console.log(x ++);
        }, 4000);
    })(i);
}
console.log(i);