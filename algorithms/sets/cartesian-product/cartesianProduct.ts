export default function cartesianProduct(setA:number[], setB:number[]):number[][] {
  if(!setA || !setB || !setA.length || !setB.length) {
    return null;
  }

  const product:number[][] = [];
  for(let iA:number = 0;iA < setA.length;iA++) {
    for(let iB:number = 0;iB<setB.length;iB++) {
      product.push([setA[iA], setB[iB]]); 
    }
  }
  return product;
}