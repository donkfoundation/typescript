function pepe(nombre: string) {
    return `hola ${nombre}`;
};

console.log(pepe("camilo"));

enum myfirstenum {
    hola = "hoal",
    seco = 0
}

const hola: Record<string, string> = {
    bonjour: "frances",
    hello: "Inglés"
}

var cadena: string = "cadena de vars";

// al usar los demás modulos que importan variables de este módulo se ejecutará el código de este.

console.log(myfirstenum["seco"]);
console.log(hola.bonjour);

const toExport = {
    pepe,
    myfirstenum,
    hola,
    cadena
}

export default toExport;

