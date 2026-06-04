import { ageClassification, weekFn } from '../main.js';

describe('ageClassification', () => {
  test('Return null if age=0, negative or bigger than 122', () => {
    expect(ageClassification(-1)).toBeNull();
    expect(ageClassification(0)).toBeNull();
    expect(ageClassification(122.01)).toBeNull();
    expect(ageClassification(150)).toBeNull();
  });

  test('Return "Дитинство" if age (1 - 24)', () => {
    expect(ageClassification(1)).toBe('Дитинство');
    expect(ageClassification(24)).toBe('Дитинство');
  });

  test('Return "Молодість" if age (24.01 - 44)', () => {
    expect(ageClassification(24.01)).toBe('Молодість');
    expect(ageClassification(44)).toBe('Молодість');
  });

  test('Return "Зрілість" if age (44.01 - 65)', () => {
    expect(ageClassification(44.01)).toBe('Зрілість');
    expect(ageClassification(65)).toBe('Зрілість');
  });

  test('Return "Старість" if age (65.01 - 75)', () => {
    expect(ageClassification(65.01)).toBe('Старість');
    expect(ageClassification(75)).toBe('Старість');
  });

  test('Return "Довголіття" if age (75.01 - 90)', () => {
    expect(ageClassification(75.01)).toBe('Довголіття');
    expect(ageClassification(90)).toBe('Довголіття');
  });

  test('Return "Рекорд" if age (90.01 - 122)', () => {
    expect(ageClassification(90.01)).toBe('Рекорд');
    expect(ageClassification(122)).toBe('Рекорд');
  });
});

describe('weekFn', () => {
  test('Return null if cond is not a number from 1 to 7', () => {
    expect(weekFn(9)).toBeNull();
    expect(weekFn(1.5)).toBeNull();
    expect(weekFn('2')).toBeNull();
  });

  test('Return correct day of the week if cond is a number from 1 to 7', () => {
    expect(weekFn(1)).toBe('Понеділок');
    expect(weekFn(2)).toBe('Вівторок');
    expect(weekFn(3)).toBe('Середа');
    expect(weekFn(4)).toBe('Четвер');
    expect(weekFn(5)).toBe("П'ятниця");
    expect(weekFn(6)).toBe('Субота');
    expect(weekFn(7)).toBe('Неділя');
  });
});
