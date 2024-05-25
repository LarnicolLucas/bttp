export const createMachines = (niveau: number)=> Object.assign({}, {
    niveau: niveau,
    key: niveau,
    cout: (10*niveau) + 10,
    productivite: 25*niveau,
    nom: "Machine de niveau "+niveau
});

export const createMoyenProduction = (
    moyenProdState: [
    {
        niveau: number,
        key: number,
        cout: number,
        productivite: number,
        nom: string
    }[], (listMoyenProd: {
        niveau: number,
        key: number,
        cout: number,
        productivite: number,
        nom: string
    }[])=> void]) => (
    objetNouvelProduction: {
        niveau: number,
        key: number,
        cout: number,
        productivite: number,
        nom: string
    }) => () => {
    moyenProdState[1](moyenProdState[0].concat(objetNouvelProduction))
}