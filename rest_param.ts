//to avoid naming conflict among typescript files use 'namesapce'
namespace restpara
{
    //when 3 dots '...', is used in function as parameter to a variable
    //makes function to accept multiple parameters without declarations
    // i.e. variable number of arguments
    function test(n1:number,n2:number,...n3:number[]){
        let result=n1+n2;
        for(let value of n3){
            result += value;
        }
        return result;
    }
    test(10,20,30,40,50,60);
    function sample(...d:any){
        console.log(d);
        
    }

    sample('a',0,null,0.2,89,new Object());
}