import Footer from "../component/Footer/page";
import Navbar from "../component/Navbar/page";
import Link from "next/link";

export default function Billing() {
  return (
    <div>
      <Navbar />

      <div className="sm:hidden block w-[392px] h-[400px] mt-20 ml-[50px] hover:shadow-[0_0_4px_1px_black] transition-all">
        <img src="/Images/Summary.png" alt="Rental summary" />
      </div>
      <div className="w-full lg:w-[1440px] h-[2270px] lg:h-[1940px] flex mt-[100px] bg-[#f6f7f9]">
        <div className="w-[805px] sm:h-[1840px] h-[2176px] border-2 sm:mt-6 sm:ml-[32px] ">
          {/* BILLING INFO */}
          <form className="mt-10">
            <img src="/Images/Info.png" alt="billing info" />
            <div className="sm:grid grid-cols-2 gap-5 bg-white">
              <div>
                <h1 className="mt-3 font-semibold">Name</h1>
                <input
                  className="mt-3 bg-slate-100 w-[386px] h-[56px] rounded-[10px] p-6 hover:shadow-[0_0_4px_1px_black] "
                  placeholder="Your name"
                ></input>
              </div>

              <div>
                <h1 className="mt-3 font-semibold">Phone Number</h1>
                <input
                  className="mt-3 bg-slate-100 w-[386px] h-[56px] rounded-[10px] p-6 hover:shadow-[0_0_4px_1px_black] transition-all"
                  placeholder="Phone Number"
                ></input>
              </div>

              <div>
                <h1 className="mt-3 font-semibold">Address</h1>
                <input
                  className="mt-3 bg-slate-100 w-[386px] h-[56px] rounded-[10px] p-6 hover:shadow-[0_0_4px_1px_black] transition-all"
                  placeholder="Address"
                ></input>
              </div>

              <div>
                <h1 className="mt-3 font-semibold">town/City</h1>
                <input
                  className="mt-3 bg-slate-100 w-[386px] h-[56px] rounded-[10px] p-6 hover:shadow-[0_0_4px_1px_black] transition-all"
                  placeholder="Town/City"
                ></input>
              </div>
            </div>
          </form>

          {/* RENTAL INFO */}
          <form className="mt-10">
            <img src="/Images/Rental Info.png" alt="billing info" />
            <img src="/Images/PickUp.png" alt="Pick up" className="mt-8" />
            <div className="sm:grid grid-cols-2 gap-5 bg-white">
              <div>
                <h1 className="mt-3 font-semibold">Location</h1>
                <input
                  className="mt-3 bg-slate-100 w-[386px] h-[56px] rounded-[10px] p-6 hover:shadow-[0_0_4px_1px_black] "
                  placeholder="Location"
                ></input>
              </div>

              <div>
                <h1 className="mt-3 font-semibold">Date</h1>
                <input
                  className="mt-3 bg-slate-100 w-[386px] h-[56px] rounded-[10px] p-6 hover:shadow-[0_0_4px_1px_black] transition-all"
                  placeholder="Date"
                ></input>
              </div>

              <div>
                <h1 className="mt-3 font-semibold">Time</h1>
                <input
                  className="mt-3 bg-slate-100 w-[386px] h-[56px] rounded-[10px] p-6 hover:shadow-[0_0_4px_1px_black] transition-all"
                  placeholder="Time"
                ></input>
              </div>
            </div>
            {/* DROP OFF */}

            <img src="/Images/drop.png" alt="Pick up" className="mt-8" />
            <div className="grid grid-cols-2 gap-5 bg-white">
              <div>
                <h1 className="mt-3 font-semibold">Location</h1>
                <input
                  className="mt-3 bg-slate-100 w-[386px] h-[56px] rounded-[10px] p-6 hover:shadow-[0_0_4px_1px_black] "
                  placeholder="Location"
                ></input>
              </div>

              <div>
                <h1 className="mt-3 font-semibold">Date</h1>
                <input
                  className="mt-3 bg-slate-100 w-[386px] h-[56px] rounded-[10px] p-6 hover:shadow-[0_0_4px_1px_black] transition-all"
                  placeholder="Date"
                ></input>
              </div>

              <div>
                <h1 className="mt-3 font-semibold">Time</h1>
                <input
                  className="mt-3 bg-slate-100 w-[386px] h-[56px] rounded-[10px] p-6 hover:shadow-[0_0_4px_1px_black] transition-all"
                  placeholder="Time"
                ></input>
              </div>
            </div>
          </form>
          {/* PAYMENT SUMMARY */}

          <form className="mt-10">
            <img src="/Images/payment.png" alt="payment method" />
            <div className="mt-4 rounded-md flex gap-40 sm:gap-[75%]">
              <img src="/Images/Credit.png" alt="payment method" />
              <img src="/Images/Visa.png" alt="payment method" />
            </div>
            <div className="sm:grid grid-cols-2 gap-5 bg-white">
              <div>
                <h1 className="mt-3 font-semibold">Card Number</h1>
                <input
                  className="mt-3 bg-slate-100 w-[386px] h-[56px] rounded-[10px] p-6 hover:shadow-[0_0_4px_1px_black] "
                  placeholder="card number"
                ></input>
              </div>

              <div>
                <h1 className="mt-3 font-semibold">Expiration Date</h1>
                <input
                  className="mt-3 bg-slate-100 w-[386px] h-[56px] rounded-[10px] p-6 hover:shadow-[0_0_4px_1px_black] transition-all"
                  type="number"
                  placeholder="Expiration date"
                ></input>
              </div>

              <div>
                <h1 className="mt-3 font-semibold">Card holder</h1>
                <input
                  className="mt-3 bg-slate-100 w-[386px] h-[56px] rounded-[10px] p-6 hover:shadow-[0_0_4px_1px_black] transition-all"
                  placeholder="card holder"
                ></input>
              </div>

              <div>
                <h1 className="mt-3 font-semibold">CVC</h1>
                <input
                  className="mt-3 bg-slate-100 w-[386px] h-[56px] rounded-[10px] p-6 hover:shadow-[0_0_4px_1px_black] transition-all"
                  placeholder="CVC"
                ></input>
              </div>
            </div>
            {/* RADIO BUTTON */}
            <div className="flex mt-4 bg-slate-100">
              <input type="radio"></input>
              <h1 className="ml-3">Paypal</h1>
            </div>

            <div className="flex mt-4 bg-slate-100">
              <input type="radio"></input>
              <h1 className="ml-3">Bitcoin</h1>
            </div>
          </form>
          {/* CONFIRMATION */}
          <form className="mt-10">
            <img src="/Images/confirm.png" alt="confirmation" />

            <div className="h-9 flex mt-8 sm:mt-6 bg-white">
              <input type="checkBox"></input>
              <h1 className="ml-3 mt-1">
                I agree with sending an Marketing and newsletter emails. No
                spam, promissed!
              </h1>
            </div>

            <div className="h-9 flex mt-8 sm:mt-4 bg-white">
              <input type="checkBox"></input>
              <h1 className="ml-3 mt-1">
                I agree with our terms and conditions and privacy policy.
              </h1>
            </div>
            <Link href={"/confirm"}>
              <button className="mt-7 bg-blue-700 w-[140px] h-14 rounded-md text-white hover:shadow-[0_0_4px_1px_black] transition-all">
                Rent Now
              </button>
            </Link>
          </form>
          <img
            src="/Images/SafeData.png"
            alt="safe data"
            className="sm:mt-10"
          />
        </div>

        {/* SUMMARY */}
        <div className="w-[330px] h-[450px] mt-6 ml-[50px] hover:shadow-[0_0_4px_1px_black] transition-all hidden sm:block">
          <img src="/Images/Summary.png" alt="Rental summary" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
