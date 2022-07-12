namespace interfacedemo
{
    abstract class AbsEmployee{
        private salary:number;
        constructor(salary:number){
            this.salary=salary;
        }
        
        getSalary(){
            return this.salary;
        }
       abstract calculateTax():number;

    }
    class SalariedEmployee extends AbsEmployee{
        private tax:number;
        constructor(salary:number,tax?:number){
            super(salary);
            this.tax = tax || 0;
        }
        calculateTax():number{
            if(super.getSalary()>500000.00)
                return super.getSalary()*(this.tax/100);
            return 0;
        }
        getSalary(): number {
            return super.getSalary()-this.calculateTax();
        }
    }
    interface INotification
    {
        SMSNotify():void;
        EmailNotify():void;
    }

    class VideoChannel implements INotification
    {
        UploadVideo():void{
            console.log('video uploaded...');
            
        }

        SMSNotify(): void {
            console.log('sms notify...');
            
        }
        EmailNotify(): void {

            console.log('email notified...');
            
        }
        
    }

    var obj = new VideoChannel();
    obj.UploadVideo();
    obj.SMSNotify();
    obj.EmailNotify();

    var emp:AbsEmployee = new SalariedEmployee(400000,10);
    console.log(emp.calculateTax());
    console.log(emp.getSalary());
    
    
}