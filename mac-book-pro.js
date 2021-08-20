// this function is to check the entered coupon code and if it find the coupon right it will reduce 20% of the total
function updateTotaApplyingCoupon(coupon){
    const totalPriceWithoutDiscount = parseInt(document.getElementById('total-price').innerText);
    const totalApplyingCoupon = document.getElementById('total-with-coupon');
    let priceAfterDiscount = parseFloat(totalApplyingCoupon.innerText);
    if(coupon == 'stevekaku'){
        priceAfterDiscount = totalPriceWithoutDiscount*0.8;
        totalApplyingCoupon.innerText = priceAfterDiscount;
    }
    else{
        totalApplyingCoupon.innerText = priceAfterDiscount;
    }
    
}


//--------------------------------------updatePrice function start here-------------------------------//

// creating another function to update price based on extra product customer want 
// this function will take to paremeter, one is which product type he is selecting and another is which product he selected

function updatePrice(productType, productInfo){

    // declaring some variable to get the specific element where price will be displayed
    let memoryCost = document.getElementById('memory-cost');
    let storageCost = document.getElementById('storage-cost');
    let deliveryCost = document.getElementById('delivery-cost');
    const totalPrice = document.getElementById('total-price');
    const totalRelatedToCoupon = document.getElementById('total-with-coupon');

    // now setting if else conditions for our 3 types of product
    // and for the specific product customer selecting; we are updating price to its relevant element 
    if(productType == 'memory'){
        if(productInfo=='8GB'){
            memoryCost.innerText = 0;
        }
        else{
            memoryCost.innerText = 180;
        } 
    }
    else if(productType == 'storage'){
        if(productInfo == '256GB'){
            storageCost.innerText = 0;
        }
        else if(productInfo == '512GB'){
            storageCost.innerText = 100;
        }
        else{
            storageCost.innerText = 180;
        }
    }
    else{
        if(productInfo == 'free'){
            deliveryCost.innerText = 0;
        }
        else{
            deliveryCost.innerText = 20;
        }
    }

    // update Total Price
    let totalNewPrice = 1299 + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText);
    totalPrice.innerText = totalNewPrice;

    //  update grand total which is related to coupon 
    totalRelatedToCoupon.innerText = totalNewPrice;
}
//----------------------------------updatePrice function end here---------------------------------------//



// below we are getting all the buttons where we want to add an event handler
// and adding relevant function as an event 

document.getElementById('8GB-memory').addEventListener('click', function(){
    updatePrice('memory', '8GB');
});
document.getElementById('16GB-memory').addEventListener('click', function(){
    updatePrice('memory', '16GB');
});

document.getElementById('256GB-storage').addEventListener('click', function(){
    updatePrice('storage', '256GB');
});
document.getElementById('512GB-storage').addEventListener('click', function(){
    updatePrice('storage', '512GB');
});
document.getElementById('1TB-storage').addEventListener('click', function(){
    updatePrice('storage', '1TB');
});

document.getElementById('free-delivery').addEventListener('click', function(){
    updatePrice('delivery', 'free');
});
document.getElementById('urgent-delivery').addEventListener('click', function(){
    updatePrice('delivery', 'urgent');
});

document.getElementById('coupon-apply').addEventListener('click', function(){
    const couponInput = document.getElementById('coupon-input');
    updateTotaApplyingCoupon(couponInput.value);
    couponInput.value = '';
});