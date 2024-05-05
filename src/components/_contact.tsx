import React from "react";
import diane from "/public/assets/diane.png";
import Image from "next/image";

export const Contact = () => {
    return (
        <div id="contact" className="contact">
            <h1>Let's bring your project to life</h1>
            {/* <p>Feel free to reach out to me at <a href="mailto:dianedecourt@gmail.com">dianedecourt@gmail.com</a></p> */}
            <Image src={diane} alt="Diane" width={500} height={710} style={{ objectFit: 'cover' }} />
        </div>
    );
}
            