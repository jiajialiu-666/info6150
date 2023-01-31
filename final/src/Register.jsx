import './Register.css';
import { useState } from 'react';
import { useRef } from 'react';
import Verify  from './Verify';

function Register() {
    const [ nameFormat, setnameFormat ] = useState (false);
        const [ emailFormat, setemailFormat ] = useState (false);
        const [ phoneFormat, setphoneFormat ] = useState (false);

        const NameInput =useRef();
        const EmailInput = useRef();
        const phoneInput = useRef();
        
      
        function Test(event) {
            event.preventDefault();

            if(NameInput.current.value === "") {
                setnameFormat(true);
            }

            if(NameInput.current.value !== "") {
                setnameFormat(false);
            }

            if(EmailInput.current.value === "") {
                setemailFormat(true);
            }

            if(EmailInput.current.value !== "") {
                setemailFormat(false);
            }
            if(phoneInput.current.value === "") {
                setphoneFormat(true);
            }

            if(phoneInput.current.value !== "") {
                setphoneFormat(false);
            }

        }
    return (   
        
            <>
            <form class="register" action="/register" method="POST">
                <div class="register__name">
                    <label className="name">Name:</label>
                    <input name="name" class="register__name__input" placeholder="Required" ref={NameInput}/>
                   { nameFormat && <Verify/>}


                </div>
                <div class="register__email">
                    <label className="name">Email:</label>
                    <input name="email" class="register__email__input" placeholder="Required" ref={EmailInput}/>
                   {emailFormat && <Verify/>}

                </div>
                <div class="phone">
                    <label className="name">Mobile Phone: </label>
                    <input name="phone2" class="register__phone__input" placeholder="Required" ref={phoneInput}/>
                    {phoneFormat && <Verify/>}

                </div>
                <div class="menu">
                <label className="name">Gender: </label>

                    <select name="Gender" required>
                    
                        <option value="0">Please select</option>
                        <option value="1">Women</option> 
                        <option value="2">Men</option>
                        <option value="3">Not Identified</option>
                    </select>
                </div>
                <div class="checkbox">
                    <input type="checkbox" name="wants-spam" id="spam" defaultChecked={true}/>
                    <label className="spam">Do you want us to send you the latest notice?</label>
                </div>
                 <button type="submit" class="register__submit" onClick={Test}>Register!</button>
            </form>
            </>
        
     
      
    );
}
export default Register;