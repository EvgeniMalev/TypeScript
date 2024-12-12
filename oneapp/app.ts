function test(): void {
    const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];
    arr.forEach((e: number) => {
        if (e % 3 === 0 && e % 5 === 0) {
            console.log(`${e} is divisible by both 3 and 5`);
        } else if (e % 3 === 0) {
            console.log(`${e} is divisible by 3`);
        } else if (e % 5 === 0) {
            console.log(`${e} is divisible by 5`);
        } else {
            console.log(`${e} is not divisible by 3 or 5`);
        }
    });
}

test();
