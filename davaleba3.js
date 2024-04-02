/* დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს */ 

function compareNumbers(m, n) {
    if (m > n) {
        return m + " მეტია" + n + "- ზე" ;
    } else if (n > m) {
        return n + " მეტია " + m + "- ზე" ;
    } else {
        return 0;
    }
}


console.log (compareNumbers (5,18))


/* დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი */ 

function sumNumbers(a, b) {
    return a + b;
}

console.log (sumNumbers (10,26))


/*  დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი) */

function Fullname() {
    console.log("MISHA", "SIDAMONIDZE");
}
Fullname();

/* დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)
*/

function getFullName(firstname, lastname) {
    var fullName = firstname + " " + lastname;
    return fullName;
}
var firstName = "MISHA";
var lastName = "SIDAMONIDZE";
var fullName = getFullName(firstName, lastName);
console.log(fullName);

/* Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, */

function number(n) {
    let multi = 1 
    for (let i = 1; i < n; i++ ){
        multi *=i;
    }
    return multi
}
console.log(number(7));

/* Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი properties: firstname, lastname, age, scores (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) და მეთოდი რომელიც აბრუნებს სტუდენტის სრულ სახელს ( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ ) */

let student = {
    firstName:"MISHA",
    lastName:"SIDAMONIDZE",
    age: 28,
    score:[4,7,5,3,2],
name: function() {
    
    return this.firstName + " " + this.lastName;
   
}
};
console.log(student.name());

/*დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)*/ // ეს მემგონი ზედა დავალების არის და აღარ დავწერე 

/* Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს */

function score(student) {
    let sum = 0;
    for (const score of student.score) {
        sum += score;
    }
    return sum;
}
console.log(score(student));


/* დაბეჭდეთ სტუდენტის სახელი და ასაკი */

function nameAndAge(student) {
    return student.firstName + " " + student.age;
}
console.log(nameAndAge(student));



