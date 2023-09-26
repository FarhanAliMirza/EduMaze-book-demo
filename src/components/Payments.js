import React from 'react'
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { toast } from 'react-toastify';
import "../index.css";
import { db } from "../firebase";
const Payments = () => {

  const [name, setName] = useState("")
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const { user } = useAuth0();

    const buyNow = async (e) => {
        e.preventDefault();

          const addressInfo = {
            name,
            address,
            pincode,
            phoneNumber
          }

          var options = {
            key: "rzp_test_qExEObeUH4JI7r",
            key_secret: "htRbHMZd1lraE6TgI3ceVu61",
            amount: parseInt(100),
            currency: "INR",
            order_receipt: 'order_rcptid_' + name,
            name: "Edumaze",
            description: "for testing purpose",
            handler: function (response) {
                console.log(response)
                toast.success('Payment Successful')

                const paymentId = response.razorpay_payment_id;

                  db.collection('Order')
                  .add({
                   addressInfo:addressInfo,
                   date: new Date().toLocaleString(
                        "en-US",
                        {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                        }
                    ),
                    email: user.email,
                    userid: user.name,
                    paymentId:paymentId,
                  })
                  .then(()=>{
                    alert('Paid Successfully')
                  })
                  .catch((error)=>{
                    alert(error.message);
                  })

                    setPhoneNumber("");
                    setName("");
                    setAddress("");
                    setPincode("");
            },
        
            theme: {
                color: "#3399cc"
            }
        };
        
        var pay = new window.Razorpay(options);
        pay.open();
        console.log(pay)

    }

    const input =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-light-orange peer";
  const label =
    "peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light-orange  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

    return (
        <form className="form" onSubmit={buyNow}>
          <div class="relative z-0 w-full mb-6 group">
            <input
              name="text"
              class={input}
              placeholder=" "
              required
              value={name}  
              onChange={(e)=>setName(e.target.value)}
            />
            <label for="floating_name" class={label}>
              Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              
              name="email"
              class={input}
              placeholder=" "
              required
              value={address}  
              onChange={(e)=>setAddress(e.target.value)}
            />
            <label for="floating_email" class={label}>
              Address
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              
              name="tel"
              class={input}
            //   pattern="[0-9]{10}"
              placeholder=" "
              required
              value={pincode}  
              onChange={(e)=>setPincode(e.target.value)}
            />
            <label for="floating_phone" class={label}>
              Pincode
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              
              name="tel1"
              class={input}
              placeholder=" "
              pattern="[0-9]{10}"
              required
              value={phoneNumber}  
              onChange={(e)=>setPhoneNumber(e.target.value)}
            />
            <label for="floating_phone" class={label}>
              Phone number (10-digit)
            </label>
          </div>
          <button
            
            type="submit"
            class="text-white bg-edu-orange hover:bg-light-orange focus:ring-4 focus:outline-none focus:ring-light-orange font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Buy Now
          </button>
        </form>
      );  
}
export default Payments