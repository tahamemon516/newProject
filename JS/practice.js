let str1 = "tahir@ 1234 taha 56 A";

function Alphabet(str) {
    let removeNum = str.replace("@", "")
    let removeNum1 = removeNum.replace("1", "");
    let removeNum2 = removeNum1.replace("2", "");
    let removeNum3 = removeNum2.replace("3", "");
    let removeNum4 = removeNum3.replace("4", "");
    let removeNum5 = removeNum4.replace("5", "");
    let removeNum6 = removeNum5.replace("6", "");
    
    let a = removeNum6.split(" ").join("");
    return a
}

console.log(Alphabet(str1));


let Numbers = ["78", "30", "45", "94", "40", "63"];

    function bigNum(Numbers) {
        const a = Numbers.sort();
        const b = a.reverse();
        

        let Big = b[0];
        return Big
    };

    console.log(bigNum(Numbers));