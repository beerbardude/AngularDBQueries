import { formatAsDate, formatAsNumber, formatValue } from './formatUtils';

describe('formatDate', () => {
    it('should show date as string', () => {
        expect(formatAsDate(new Date(2012, 11, 14))).toEqual('2012-11-14');
      });
});

describe('formatAsNumber', () => {
    it('should show 20 as 20,00', () => {
        expect(formatAsNumber(20)).toEqual('20,00');
      });
    it('should show 1.23456 as 1,235', () => {
        expect(formatAsNumber(1.23456)).toEqual('1,235');
    });
    it('should show 123456.2 as 123.456,20', () => {
        expect(formatAsNumber(123456.2)).toEqual('123.456,20');
    });
});

describe('formatValue', () => {
    it('should return number 20,987', () => {
        expect(formatValue(20.987)).toEqual(20.987);
      });
      it('should return hello', () => {
        expect(formatValue('hello')).toEqual('hello');
      });
      it('should return 2012-10-23', () => {
        expect(formatValue(new Date(2012, 10, 23))).toEqual('2012-10-23');
      });
});
