import { formatValue } from "../utils/formatUtils";
//import { addTableRowStyle } from "./query-page.style";

const htmlTableBodyTag = 'tbody'
const htmlTableRowTag = 'tr';
const htmlTableCellTag = 'td';

export function getIndexOfString(index: any): number {
    for(let x = 0; x < 10; x++) {
        if(x.toString() === index) {
            return x;
        }
    }
}

export function clearHtmlElement(htmlElement: HTMLElement) {
    htmlElement.innerHTML = '';
}

export function createTableRowWithValues(results: any, index: number): HTMLElement {
    let tableRow = document.createElement(htmlTableRowTag);
    let result = results[index];
    for (let attribute in result){
      tableRow.appendChild(createTableCellWithValue(result[attribute]));
    }

    //addTableRowStyle(tableRow);
    return tableRow;
}

export function createTableCellWithValue(value: string): HTMLElement {
    let td = document.createElement(htmlTableCellTag);
    td.innerHTML = formatValue(value);
    return td;
}



