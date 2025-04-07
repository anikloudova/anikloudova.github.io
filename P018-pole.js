//Složitý datový typ, který může obsahovat kombinace Int, String, Boolean a dalších polí atd.

let pole = []; //vytvoření prázdného pole
//druhý způsob - let pole = new Array();

let cisla = [1, 3, 5, 8, 4];
let jmena = ["Ondřej", "David", "Michal", "Karel"];

//Přístup k prvku pole
console.log(cisla[0]); //index - přístup k prvku na pozici 1
console.log(jmena); //vypíše celé pole

console.log(cisla[3]);


// ---- METODY POLE ----

//1. Délka pole
console.log(cisla.length); //vypíše délku pole

//2. Přidání prvku
cisla.push(7); //dodá na konec pole -> přidá číslo 7
cisla[0] = 18; //přidá prvek na pozici 1. Pokud už zde hodnota je, tak jí přepíše
cisla[6] = 11; //přidá prvek na pozici 7
console.log("Pole po přidání prvků :" + cisla);

//3. Odebrání prvku
cisla.pop(); //odstraní poslední prvek
console.log("Pole po odebrání posledního prvku: " + cisla);


//5. Seřazení pole
cisla.sort(); //řadí pole od nejnižší hodnoty po nejvyšší
console.log(cisla);
jmena.reverse(); //řadí pole od nejvyšší po nejnižší hodnotu nebo od Z po A
console.log(jmena);



//4. Přidání nebo odebrání položky na začátek pole
cisla.shift(); //odstraní první položku v poli
jmena.unshift("Adam"); //přidá položku na první místo v poli

console.log(cisla);
console.log(jmena);

//5. Vyhledání indexu prvku v poli
let index = cisla.indexOf(5); //vyhledá zleva prvek s hodnotou 5 a vypíše jeho index
console.log("Index čísla 5 je: " + index);
index = jmena.indexOf("Adam");
console.log(index);

//6. Vyhledání indexu prvku od konce pole
let indexZP = cisla.lastIndexOf(5); //vyhledá zprava prvek s hodnotou 5

//7. Převedení prvků pole na řetězec
pole3 = [1, 3, 4, 5, 8];
console.log(pole3);
console.log(pole3.toString()); //převádí pole na txt řetězec
console.log(pole3.join("a")); //join vkládá spojovací prvek

//8. Spojení dvou a více polí
let zelenina = ["Rajče", "Mrkev", "Brambory"];
let ovoce = ["jahody", "mango", "olivy"];

let ovocny_salat = zelenina.concat(ovoce);
console.log(ovocny_salat);