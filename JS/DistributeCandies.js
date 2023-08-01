function distributeCandies(candyType){
    const uniqueCandies = new Set(candyType);
    const onlyEat = candyType.length/2;
    return uniqueCandies.size > onlyEat ? onlyEat : uniqueCandies.size;
};