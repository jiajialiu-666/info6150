import './Events.css';
import sale from "./sale.jpg";
import donate from "./donate.jpg";


function Events() {
    return (    
        <>
         

         <div className="events_text">
            <h2 className="text__title">Look No More,Get It Now! </h2>
            <div className="text1">
            <img src={sale} alt="big sale" className="txt_pic1"/> 
            <div className="text__title2">
            <h3 >BUY ONE, GET ONE! 50%  OFF! PLUS, LAST DAY!</h3>
            <h4 > WEBSITE MEMBERS GET MORE! EXTRA 20% OFF!</h4>
            
            <dl className="text__title3" >
                <dt ><b>Lots of choices.</b></dt>
                <dd>Hundreds of niche brands from around the world</dd>
                <dt ><b>Discount on price.</b></dt>
                <dd>New users who sign up can get extra benefits </dd>
            </dl>
            </div>
               </div>
        </div>
                 <div className="events_text">
                 
                    <h2 className="text__title">Help Support Those Who is In Need！ </h2>
                    <div className="text1"> 
                       <img src={donate} alt="donate clothes" className="txt_pic2"/> 
                    <div className="text__title4">
                    <h3 >Donate clothes and other items that you don't wear. </h3>
                    <h4 > Make full use of resources, release storage space!</h4>
            
                        <dl className="text__title5">
                            <dt ><b>Donation and Earn points </b></dt>
                            <dd>Donations of used clothes earn points, and 100 points can fend off a 10% discount. </dd>
                        </dl>

                    </div>

                        </div>

                             
                 </div> 
                
                             </>
     
      
    );
}
export default Events;

