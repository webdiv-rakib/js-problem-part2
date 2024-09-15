/**
 * chair ---> 3 cft
 * table ---> 10 cft
 * bed ---> 50 cft
 */
function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}
const wood = woodQuantity(5, 3, 1);
console.log("Wood Needed:", wood);

/**
 * Shirt price example
 * shirt price ---> 500
 * pant price ---> 300
 * shoe price ---> 900
 */
function productQuantity(shirtQuantity, pantQuantity, shoeQuantity) {
    const perShirtPrice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;

    const shirtTotalPrice = shirtQuantity * perShirtPrice;
    const pantTotalPrice = pantQuantity * perPantPrice;
    const shoeTotalPrice = shoeQuantity * perShoePrice;

    const totalCost = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
    return totalCost
}
const totalProductPrice = productQuantity(4, 5, 6);
console.log("Total Cost: ", totalProductPrice);