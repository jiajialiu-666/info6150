import './Home.css';
function Home({onNav}) {
    return (
    <>
    <div class ="main__card">
        <div class="card">
            
                        <h3 class="card__tittle">A little cute cat</h3>
                        <img src="http://placekitten.com/500/500/?image=1" alt="a little cute cat" class="card__pic"/>
                        <div class="card__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Ex amet qui mollitia. Minus odio corporis, nesciunt at debitis similique incidunt omnis 
                            hic quis quasi commodi iure voluptate mollitia porro veritatis.</div>
                            <a href="/Cats.html" class="card__cta" onClick={ onNav}>Cats!</a>
                    </div>
                    <div class="card">
                        <h3 class="card__title">Several cute cats</h3>
                        <img src="http://placekitten.com/500/500/?image=2" alt="several cute cats" class="card__pic"/>
                        <div class="card__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Ex amet qui mollitia. Minus odio corporis, nesciunt at debitis similique incidunt omnis 
                             hic quis quasi commodi iure voluptate mollitia porro veritatis.</div>
                        <a href="#" class="card__cta">Read more!</a>
                    </div>
                    <div class="card">
                        <h3 class="card__title"> A little cat playing with snow</h3>
                        <img src="http://placekitten.com/500/500/?image=3" alt="a little cat playing with snow" class="card__pic"/>
                        <div class="card__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, architecto voluptates
                             porro iure vitae et animi quod nemo, a impedit ad molestiae, tempora beatae est eligendi 
                             expedita.</div>
                     
                           <a href="#" class="card__cta">Read more!</a>
                           
                    </div>
                    </div>
                    </>
                    
    );
}
export default Home;