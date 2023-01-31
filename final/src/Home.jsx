import './Home.css';
import card1 from "./card1.jpg";
import card2 from "./card2.jpg";
import card3 from "./card3.jpg";

function Home({onNav}) {
    return (
    <>
    <div class ="main__card">
        <div class="card">
            
                        <h3 class="card__tittle">FANCY STYLE</h3>
                        <img src={card1} alt="fancy style" class="card__pic"/>
                        <div class="card__text">Appropriate tailoring, fashionable atmosphere, clear contour modeling,
                         highlighting the sense of elegant lines,just right folds and seamless stitching 
                         in the details outline the female graceful body. Come and buy them! Wait for you!
                         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, assumenda similique cupiditate 
                         ratione dolorem odio saepe totam, eos, libero nobis rerum nemo soluta repellendus 
                         quo dolore. Aspernatur veritatis tempore eveniet!
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptate nobis aspernatur,
                          ab cumque maxime dolorem veritatis saepe iste molestiae accusamus
                         facere doloremque quisquam odio obcaecati vel impedit, optio similique!</div>
                            <a href="/Events.html" class="card__cta" onClick={ onNav}>Events!</a>
                    </div>
                    <div class="card">
                        <h3 class="card__title">SPORTS STYLE</h3>
                        <img src={card2} alt="sports style" class="card__pic"/>
                        <div class="card__text">Sports is still a hot fashion element this year,
                          compared with the formal suit, sports appear more concise and atmospheric,
                          loose sense of short size, so that the sense of modern breath greatly increased!
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae distinctio facere cum
                           reprehenderit quam voluptate ipsum consequuntur tempora, ab neque quaerat.
                            Eaque, corrupti harum placeat facere delectus maxime eum minus.adipisicing elit.
                             Repellat tempora corrupti quae officia incidunt voluptatibus cumque eum
                              iste ipsam, natus voluptatem ad voluptas molestiae vel qui
                              ipsum dolor sit amet consecteturrem totam eos porroincidunt voluptatibus.</div>
                          <a href="/Events.html" class="card__cta" onClick={ onNav}>Events!</a>
                    </div>
                    <div class="card">
                        <h3 class="card__title"> COUNTRYSIDE STYLE</h3>
                        <img src={card3} alt="countryside style" class="card__pic"/>
                        <div class="card__text"> In the color collision radiates warmth and 
                         vitality, the strong personality of the red plaid, is always a worthy star on the fashion stage.
                         With the trend sense sunglasses, deduce the classic infinite charm.lurem
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatibus, 
                         harum ut sunt tempore velit voluptates dicta ipsam ipsum eligendi distinctio 
                         animi laboriosam earum, quidem in id neque dignissimos veniam.
                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat tempora corrupti 
                         quae officia incidunt voluptatibus cumque eum iste ipsam, natus voluptatem
                          ad voluptas molestiae vel qui rem totam eos porro.</div>
                     
                         <a href="/Events.html" class="card__cta" onClick={ onNav}>Events!</a>
                           
                    </div>
                    </div>
                    </>
                    
    );
}
export default Home;