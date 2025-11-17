// нужен линейный код, без if и for 
// под каждую задачу свой тест

import { calculateTotal } from "../calculate.js";

// если CommonJS
// const { calculateTotal } = require("../calculate.js");

// discription - описание, что будет сделано
// work -  функция, которая должна быть выполнена и где производится проверка
// test(discription, work);
// expect().toBe() - сравнивает 

test("basic test", () => {
     let result = 4;
     expect(result).toBe(4);
});

test("calculateTotal sum without discount", () => {
    const list = [
        {
            id: 11111,
            name: "Война и мир",
            count: 3,
            price: 400
        },
        {
            id: 22222,
            name: "JS ",
            count: 1,
            price: 1300
        }
    ];
    const result = calculateTotal(list); 
    expect(result).toBe(2500);
}); 

test("calculateTotal sum with discount", () => {
    const list = [
        {
            id: 11111,
            name: "Война и мир",
            count: 3,
            price: 401
        },
        {
            id: 22222,
            name: "JS ",
            count: 1,
            price: 1300
        }
    ];
    const result = calculateTotal(list, true); 
    expect(result).toBeCloseTo(2230.173);
});