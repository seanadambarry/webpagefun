let spaceShip = {
    name: 'RickMobile',
    systems: {
        engineering: {
            manager: 'Rick'
        },
        combat: {
            manager: 'Summer'
        },
        medical: {
            manager: 'Beth',
            assManager: 'Greg'
        },
        waste: {
            manager: 'Jerry'
        },
    },
    fueltype: 'green death crystals'
}


for ( key in spaceShip) {
    console.log(`${key}: ${spaceShip[key]}: ${key}`);
}
