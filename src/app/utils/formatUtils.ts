export function formatValue(value: any): any {
    if(value instanceof Date) {
      return formatAsDate(value);
    }
    if(value instanceof Number) {
      return formatAsNumber(value);
    }
    else {
      return value;
    }
}

export function formatAsDate(value: Date): string {
    return value.getFullYear() + '-' + value.getMonth() + '-' + value.getDate();
}

export function formatAsNumber(value: Number): string {
    return value.toLocaleString( 'de-DE', { minimumFractionDigits: 2 });
}

