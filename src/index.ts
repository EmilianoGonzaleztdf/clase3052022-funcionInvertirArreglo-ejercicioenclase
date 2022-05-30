//declare the first array
let v1: number[] = new Array(6);
let i: number = 0;

function cargarValores(v1: number[], i: number) {
  for (i = 0; i < 6; i++) {
    v1 = Number(prompt("ingrese valores"));
    console.log("usted cargo " + v1, "en la posicion" + i);
  }
}
function mostrarArregloInvertido(v1) {
  for (i = 6; i >= 0; i--) {
    console.log("usted ingreso el valor " + v1[i], "en la la ubicacion " + i);
  }
}

//cargarValores(v1,i);
//console.log(v1+""+i);
//mostrarArregloInvertido(v1);
//estoy de arriba hice yo

function invertirVector(v: number[], cantidad: number) {
  let vectorInvertido: number[] = new Array(cantidad);
  let indice: number = 0;

  for (
    let indiceInvertido: number = cantidad - 1;
    indiceInvertido >= 0;
    indiceInvertido--
  ) {
    vectorInvertido[indice] = v[indiceInvertido];
    indice++;
  }
  console.log("el arreglo invertido es: " + vectorInvertido);
}
invertirVector([1, 2, 3, 4, 5], 5);
