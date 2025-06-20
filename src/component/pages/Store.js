import React from "react";

export default function Store() {
  return (
    <>
      <section className="section-blue">
        <div className=" container-kws p-t-4 p-b-4">
          <div className="">
            <ul className="l-s-t-n d-f j-c-s-e ">
              <li className="f-fam f-s-4 c-w d-g">
                000<span className="f-s-1 t-a-c c-w f-fam">Day(s)</span>
              </li>

              <li className="f-fam c-w f-s-4">:</li>
              <li className="f-fam c-w f-s-4 d-g">
                00<span className="f-s-1 t-a-c c-w f-fam">Hour(s)</span>
              </li>
              <li className="f-fam c-w f-s-4">:</li>
              <li className="f-fam c-w f-s-4 d-g">
                00<span className="f-s-1 c-w t-a-c f-fam">Minute(s)</span>
              </li>
              <li className="f-fam c-w f-s-4">:</li>
              <li className="f-fam c-w f-s-4 d-g">
                00<span className="f-s-1 t-a-c c-w f-fam">Second(s)</span>
              </li>
            </ul>
          </div>
          <div className="t-a-c m-t-5">
         {/*    <a href="/contact">
              <button className="contact-button f-s-1_3 c-w f-fam">
                Contact Us
              </button>
            </a> */}
            <a class="et_pb_button et_pb_promo_button f-fam" href="/contact/">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
