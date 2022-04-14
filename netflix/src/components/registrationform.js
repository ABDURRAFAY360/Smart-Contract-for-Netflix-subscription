import React, {useState} from 'react';
import '.././style.css';
import ABI from '../ABI.json';
import {ethers} from 'ethers';
function RegistrationForm() {
    const [address,setAddress] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "address"){
            setAddress(value);
        }


    }
    const subscription = async(amount) =>{
        try {
            console.log(address);
            //Active tab will send the etherium package and get the object of metamass.
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            //eth_requestAccounts get the active account from the extension
            await provider.send("eth_requestAccounts",[]);
            //provider.getSigner() sign the contract from user end
            const customer = provider.getSigner();
            const netflix = new ethers.Contract(address,ABI, customer);
            const temp = amount.toString();
            await netflix.Charge({value:ethers.utils.parseEther(temp)});
            console.log(netflix);
            }
            catch(err) {
                alert(err);
              }

    }
    const basicSubscription  = async() => {
        subscription(2)
        
    }
    const premiumSubscription  = async() => {
        subscription(4)
    }
    const platinumSubscription  = async() => {
        subscription(6)
        
    }
    return(
        <div className="form">
            <div className="form-body">
                <div className="password">
                    <label className="form__label" for="password">Contract Address </label>
                    <input className="form__input" type="text"  id="address" value={address} onChange = {(e) => handleInputChange(e)} placeholder="Contract Address"/>
                </div>
            </div>
            <div class="footer">
            <div className="password">
                <button onClick={()=>basicSubscription()} type="submit" class="btn" style={{  "margin": "20px"}}>Basic (2 ETH)</button>
                <button onClick={()=>premiumSubscription()} type="submit" class="btn" style={{  "margin": "20px"}}>Premium (4 ETH)</button>
                <button onClick={()=>platinumSubscription()} type="submit" class="btn" style={{  "margin": "20px"}}>Platinum (6 ETH)</button>
            </div>
            </div>
        </div>
       
    )       
}
export default RegistrationForm;