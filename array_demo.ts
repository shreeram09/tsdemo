namespace arraydemo
{
    let myarr:number[]=[1,2,3,4];
    console.log('simple');
    for(let value of myarr){
        console.log(value);
    }

    console.log('with spread copy');
    let copyArr:number[]=[...myarr];
    for(let value of copyArr) 
        console.log(value);
    
    console.log('with spread merged');
    let mergedArr:number[]=[...myarr,...copyArr];
    for(let value of mergedArr) 
        console.log(value);
}