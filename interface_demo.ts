namespace interfacedemo
{
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
}