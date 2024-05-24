import { createMachines } from "./utils/createMachines";

export const params = {
    tresor: 1000,
    salaries: [
        {
            niveau: 0,
            cout: 100,
            productivite: 20
        },
        {
            niveau: 0,
            cout: 100,
            productivite: 20
        }
    ],
    capital_constant: {
        batiment: 200,
        machines : [createMachines(0),createMachines(0)]
    }
};

