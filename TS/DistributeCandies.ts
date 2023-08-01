function distributeCandies(candyType: number[]): number {
    const uniqueCandies: Set<number> = new Set(candyType);
    const onlyEat: number = candyType.length/2;
    return uniqueCandies.size > onlyEat ? onlyEat : uniqueCandies.size;
};