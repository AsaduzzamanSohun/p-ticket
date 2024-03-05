let clickCount = 0;
let count = 1;
let badgeCount = 1;
let ticketPrice = 550;
let totalPrice = 0;
let grandPrice = 0;
let appliedCouponPrice = 0




function selectedSeat(id) {

    const seatButton = document.getElementById(id);
    const couponCode = document.getElementById("coupon-code");

    if (clickCount == 4) {

        seatButton.setAttribute('disabled', 'true');
        alert("You reach your limit!")

        return;
    }


    seatButton.style.backgroundColor = '#1DD100';
    seatButton.style.color = 'white';
    clickCount++;
    seatCount(count);
    seatDetails(id);


    if (clickCount >= 4) {

        couponCode.removeAttribute('disabled', 'false');
        couponBtn.removeAttribute('disabled', 'false');

        return;
    }

}


function seatCount(param) {

    let totalSeatString = document.getElementById("seatCount").innerText;
    let totalSeat = parseInt(totalSeatString);
    let leftSeat = totalSeat - param;
    document.getElementById("seatCount").innerText = leftSeat;

}


function seatDetails(param) {

    let seatNumber = document.getElementById(param).innerText;
    let seatBooked = document.getElementById("seat-booked");
    const p = document.createElement('p');
    p.innerText = seatNumber;
    seatBooked.appendChild(p);


    let seatBadgeStr = document.getElementById("seat-badge").innerText;
    let seatBadge = parseInt(seatBadgeStr);
    let totalBadge = seatBadge + badgeCount;
    document.getElementById("seat-badge").innerText = totalBadge;


    let seatClass = document.getElementById("seat-class");
    const p1 = document.createElement("p");
    p1.innerText = 'Economy Class';
    seatClass.appendChild(p1);


    let seatPriceStr = document.getElementById("seat-price");
    const p2 = document.createElement("p");
    p2.innerText = '550';
    seatPriceStr.appendChild(p2);


    let totalCost = document.getElementById('total-cost');
    totalPrice = totalPrice + ticketPrice;
    totalCost.innerText = totalPrice;


    const couponCode = document.getElementById("coupon-code");
    let coupon = couponCode.value;
    console.log(coupon)


    grandCost(totalPrice)


}

let total = 0
function grandCost(param){

    total = param;
    return total;

}


const couponBtn = document.getElementById("coupon-btn");


function applyCoupon() {

    const couponCode = document.getElementById("coupon-code");
    let coupon = couponCode.value;



    let grandTotal = document.getElementById('grand-total');
    grandPrice = total
    // grandTotal.innerText = grandPrice;



    console.log(ticketPrice)
    console.log(grandPrice)



    if (coupon == "NEW15") {

        totalPrice = totalPrice + ticketPrice;

        let discount = (grandPrice * 15) / 100
        appliedCouponPrice = grandPrice - discount;
        grandTotal.innerText = appliedCouponPrice;

        couponCode.setAttribute('disabled', 'true');
        couponBtn.setAttribute('disabled', 'true');

        return;

    }
    else if (coupon == "Couple 20") {

        totalPrice = totalPrice + ticketPrice;

        let discount = (grandPrice * 20) / 100
        appliedCouponPrice = grandPrice - discount;
        grandTotal.innerText = appliedCouponPrice;

        couponCode.setAttribute('disabled', 'true');
        couponBtn.setAttribute('disabled', 'true');

        return;

    }

    else{
        
        grandTotal.innerText = total;
        alert("Invalid Coupon");
        return;
    }





}









