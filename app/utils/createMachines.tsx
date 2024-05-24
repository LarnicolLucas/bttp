export const createMachines = (niveau: number)=> Object.assign({}, {
    niveau: niveau,
    key: niveau,
    cout: (10*niveau) + 10,
    productivite: 25*niveau,
    nom: "Machine de niveau "+niveau
})