
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

enroll(function(){
    progess(certificate);
});


//promise example
