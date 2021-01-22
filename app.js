document.getElementById('loan-form').addEventListener("submit",function (e){

    //show loading
    document.getElementById('loading').style.display = 'block';
    //hide result
    document.getElementById('results').style.display = 'none';
    setTimeout(calculateResults,2000);
    e.preventDefault();

});

function calculateResults(){
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const year = document.getElementById('year');
    const monthly_payment = document.getElementById('monthly_payment');
    const total_payment = document.getElementById('total_payment');
    const total_interest = document.getElementById('total_interest');

    const principal = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value)/100/12;
    const calculatePyment = parseFloat(year.value)*12;
    console.log(principal);
    //compute monthly pyment
    const x = Math.pow(1+calculateInterest,calculatePyment);
    const monthly = (principal*x*calculateInterest)/(x-1);

    if (isFinite(monthly)){
        monthly_payment.value = monthly.toFixed(2);
        total_payment.value = (monthly*calculatePyment).toFixed(2);
        total_interest.value = ((monthly*calculatePyment)-principal).toFixed(2);
        //hide loading
        document.getElementById('loading').style.display = 'none';
        //show result
        document.getElementById('results').style.display = 'block';
    }
    else {
        showError("Please Check Your number");
    }



}


function showError(error){
    //hide loading
    document.getElementById('loading').style.display = 'none';
    //hide result
    document.getElementById('results').style.display = 'none';
    const errorDiv = document.createElement('div');
    errorDiv.className = "alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error));
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    card.insertBefore(errorDiv,heading);
    setTimeout(clearError,3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}