export function roll(sides, dice, rolls) {
    let result = [];
    for(let i = 0; i < rolls; i++) {
        let total = 0;
        for (let j = 0; j < dice; j++) {
            total = total + Math.floor(Math.random() * sides) + 1;
        }
        result.push(total);
    }
    return {"sides": sides, "dice": dice, "rolls": rolls, "results": result};
}
