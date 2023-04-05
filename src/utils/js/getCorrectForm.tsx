export function getCorrectForm(stringArr: string[], count: number){
  return stringArr[(count % 100 > 4 && count % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(count % 10 < 5) ? Math.abs(count) % 10 : 5]];
}