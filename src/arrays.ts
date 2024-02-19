/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 1) {
        return [...numbers, ...numbers];
    }
    if (!numbers) {
        return [];
    }
    const sol = [...numbers];
    sol.splice(1, numbers.length - 2);
    return sol;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((price: number): number => price * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((word: string): number =>
        !isNaN(parseInt(word)) ? parseInt(word) : 0
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((word: string): number =>
        !isNaN(parseInt(word.replace("$", "")))
            ? parseInt(word.replace("$", ""))
            : 0
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const isNotQuestion = (word: string): boolean => !word.includes("?");
    const removedQuestions = messages.filter(isNotQuestion);
    return removedQuestions.map((word: string): string =>
        word.includes("!") ? word.toUpperCase() : word
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let total = 0;
    words.map((word: string): number =>
        word.length < 4 ? total++ : (total += 0)
    );
    return total;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const isNotColor = (color: string): boolean =>
        !(color === "red" || color === "green" || color === "blue");
    const changed = colors.filter(isNotColor);
    return changed.length === 0;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    // Is it redundant? Absolutely! Am I gonna do this again? Absolutely not!
    if (addends.length === 0) return "0=0";

    let total = 0;
    addends.map((num: number): number => (total += num));
    let ans = total.toString() + "=";
    addends.map((num: number): string => (ans += num.toString() + "+"));

    return ans.slice(0, ans.length - 1);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // THIS TOOK ME SO LONG TO DO!!!!!
    let total = 0;
    let index = 0;
    let encounteredNegative = false;
    const ans = [...values];

    values.map((num: number) => {
        if (num <= -1 && !encounteredNegative) {
            encounteredNegative = true;
            ans.splice(index + 1, 0, total);
        } else {
            total += num;
        }
        index++;
    });

    return encounteredNegative ? ans : [...ans, total];
}
