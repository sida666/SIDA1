/* დაბეჭდეთ რიცხვები 2 დან 8 მდე */


for (let i = 2; i < 8; i++) {
    console.log(i);
}

/*5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…) */

for(let i = 5; i < 35; i+=4) {
    console.log(i);
}

/*დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი*/

let S = 1
for (N = 3; N <= 8; N++) {  S *= N;  
}
console.log(S);

/*Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName, age და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი) */

let person = {firstname:"MISHA", lastname:"SIDAMONIDZE", age:"27"}
console.log(person.firstname,person.lastname);

/*დაბეჭდეთ მეოტხე დავალებაში გამოცხადებული პერსონის თითოეული property value */

let person1 = {firstname:"MISHA", lastname:"SIDAMONIDZE", age:"27"}
for (let key in person1) {
    console.log(key + ':' + person1[key])
}

/* დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"]; დაბეჭდეთ მასივის თითოეული წევრი. */

let fruits = ["Apple", "Banana", "Orange"];
for(let F=0; F <= 2; F++) {
    console.log(fruits[F])
}

/* დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits */

let fruits1 = ["Apple", "Banana", "Orange"];
fruits1.unshift("Grapes");
fruits1.push("Pineapples"); {
    console.log(fruits1)   
}

/* დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი ( სათითაოდ) სანამ ჯამი არის 100 ზე ნაკლები ( დაიბეჭდება I-იტერაცია =>1, 2 იტერაცია 3(ანუ 1+2),  მესამე => 6 (3+3), მეოთზე => 10 (6+3) */

let Z = 0;
for (let i = 1; i < 34; i++) {
    Z +=i;
    if(Z<100)
    console.log(Z);
}
    
