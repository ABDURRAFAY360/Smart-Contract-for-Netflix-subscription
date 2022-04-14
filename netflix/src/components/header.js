import React from 'react';
function Header() {
    return(
        <nav class="navbar" style={{"background": "#8e0e00","background": "-webkit-linear-gradient(to right, #8e0e00, #1f1c18)","background": "linear-gradient(to right, #8e0e00, #1f1c18)"}}>
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3>Netflix Subscription</h3>
            </div>
        </nav>
    )
}
export default Header;