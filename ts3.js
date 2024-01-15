function capToFront(text ) {
    let upText = [...text].filter(l => l === l.toUpperCase())
    let lowText = [...text].filter(l => l === l.toLower()) 
    return [...upText , ...lowText].join("")
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));