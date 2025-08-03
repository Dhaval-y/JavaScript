const myVal = {
    IN: "India",
    USA: "United States of America",
    Fr: "France"
}

for (const key in myVal) {
    //console.log(`${key} refers to ${myVal[key]}`);
}

const programmingLang = ["java", "javascript", "python", "c++", "c#"]

for (const key in programmingLang) {
    console.log(programmingLang[key]);
} 