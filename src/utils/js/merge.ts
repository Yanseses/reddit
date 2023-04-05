export function merge<O extends Object>(obj: O){
  return <K extends Object>(obj2: K) => ({
    ...obj,
    ...obj2
  });
}