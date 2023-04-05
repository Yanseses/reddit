export function compose<U>( ...fns: Function[]){
  return <E,>(initiialValue: any): U => 
    fns.reduceRight((permicionValue, fn) => fn(permicionValue), initiialValue);
}

export function pipe<U>( ...fns: Function[]){
  return <E,>(initiialValue: any): U => 
    fns.reduce((permicionValue, fn) => fn(permicionValue), initiialValue);
}