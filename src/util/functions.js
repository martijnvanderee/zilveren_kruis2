import { CURRENCY_SIGNS, RGX_NAME } from './constants';
//1
export const removeDouble = arr => arr.reduce(addUniqueValue, []);
const addUniqueValue = (arr, ele) => (arr.includes(ele) ? arr : [...arr, ele]);

//2
export const priceMarkup = (price, currency = 'euro') =>
    addCurrency(convertPrice(price.toString().split('.')), currency);

const convertPrice = price => {
    //price has 0 decimal
    if (price.length === 1) return add0(price[0]);
    //price has 1 decimal
    if (price[1].length === 1) return add00(price.join(','));
    //price has 2 decimals
    return price.join(',');
};

const add0 = price => `${price},00`;
const add00 = price => `${price}0`;

const addCurrency = (price, currency) => `${CURRENCY_SIGNS[currency]} ${price}`;

//3
export const helloMessage = name => {
    const isValidName = RGX_NAME.test(name);

    if (isValidName) return `Hallo, mijn naam is ${name}`;

    return `"${name}" is not a real name`;
};
