//to avoid conflicts between two typescripts 
//we use namespace and defined similar variables types as of other typescript file

namespace varletdemo
{
    function test(){
        const pi:number=3.14;

        var num1 : number = 10;
        {
            var num2:number=20;
            console.log(num1);
            console.log(num2);
        }
        console.log(num1);
        console.log(num2);
    }

    test();
}