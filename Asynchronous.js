
//callback function example

const paymentSuccess = true;
const marks = 80;

function enroll(callback)
{
    console.log("Course enrollment is in progress...");

    setTimeout(function(){
        if(paymentSuccess)
        {
            console.log("Payment successful. Enrollment completed.");
            callback();
        }
    },2000);

}

function progess(callback)
{
    console.log("Course is in progress...");
    setTimeout(function()
    {
        if(marks >= 80)
        {
            console.log("Course completed successfully. You scored " + marks);
            callback();
        }
        else{
            console.log("Course not completed. You scored " + marks);
        }
    },2000);
}
function certificate()
{
    console.log("Generating certificate...");

    setTimeout(function(){
        console.log("Certificate generated successfully.");
    },2000);
}

// enroll(function(){
//     progess(certificate);
// });


//promise example
function enroll1()
{
    console.log("Course enrollment is in progress...");
    let promise = new Promise(function(resolve, reject)
        {
            setTimeout(() => {
                if(paymentSuccess)
                {
                    resolve();
                }
                else
                {
                    reject("Payment failed. Enrollment unsuccessful.");
                }
                
            }, 2000);
        });
        return promise;
}
function progess1()
{
        console.log("Course is in progress...");
    let promise = new Promise(function(resolve, reject)
    {
        setTimeout(() => {
            if(marks >= 80)
            {
                resolve();
            }
            else
            {
                reject("Course not completed. You scored " + marks);
            }
        }, 2000);
    });
    return promise;
}
function certificate1()
{
    console.log("Generating certificate...");
    let promise = new Promise(function()
    {
        setTimeout(() => {
            
            console.log("Certificate generated successfully.");
        }, 2000);
        
    });
    return promise;
}

enroll1()
.then(progess1)
.then(certificate1)
.then(function(message){
    console.log(message);
})
.catch(function(error){
    console.log(error);
});
