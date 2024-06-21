import type ICategoria from "@/interfaces/ICategoria";
import type IReceita from "@/interfaces/IReceita";

export async function obterCategorias() {
    let resposta = await fetch('https://gist.githubusercontent.com/eanicomaco/a05a10efe349b95663356fd17e0b9361/raw/29f8ad3dde6746c563481b9ee3ad99adf409df4e/categorias.json')

    const categorias: ICategoria[] = await resposta.json();

    return categorias;
}

export async function obterReceitas() {
    let resposta = await fetch('https://gist.githubusercontent.com/eanicomaco/29dcaf960adfdfa4d740d94e774dc22e/raw/92656451221eeb63877fe6ef12c53622d01891d3/receitas.json')

    const receitas: IReceita[] = await resposta.json();

    return receitas;
}

