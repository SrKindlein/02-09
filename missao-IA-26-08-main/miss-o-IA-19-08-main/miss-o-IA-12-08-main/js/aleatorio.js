 const nomes = ["Gustavo", "Samuel", "Vitor", "Pedro", "José", "Matheus", "Erik"]

 export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);