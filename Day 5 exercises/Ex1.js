// 1. Given an array of objects that have a field called population, sort the objects by population size. Return the sorted array.

const cities = [
    {name: 'Cluj-Napoca', population: 400000},
    {name: 'Bucuresti', population: 2000000},
    {name: 'Iasi', population: 300000}
]

function compare(a, b) {

    const populationA = a.population;
    const populationB = b.population;

    let comparison = 0;
    if(populationA > populationB) {
        comparison = 1;
    } else if (populationA < populationB) {
        comparison = -1;
    }

    return comparison;
}

cities.sort(compare);
