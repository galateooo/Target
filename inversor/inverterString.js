function inverter(str) {
    let strInvertida = "";
    for (let i = 0; i < str.length; i++) {
      strInvertida = str[i] + strInvertida;
    }
    return strInvertida;
  }
  
  const palavra = "target";
  const invertida = inverter(palavra);
  console.log(invertida); 
  