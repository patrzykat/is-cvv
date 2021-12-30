export const containsCVV = (s: string): boolean => s.length === 3 && !isNaN(Number(s));
