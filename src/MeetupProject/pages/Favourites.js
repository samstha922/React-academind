import { useContext } from "react"
import FavoritesContext from "../../store/favorites-context"
import MeetupList from "../components/meetups/MeetupList"

const Favourites = ()=>{
    const favoritesCtx = useContext(FavoritesContext)
    let content
    if (favoritesCtx.totalFavorites = 0){
        content= <p>No Favorites yet. U wanna start to add some?</p> ;
    }else{
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }
    return <section>
        <h1>My Favourites</h1>
        <MeetupList meetups = {favoritesCtx.favorites}/>
    </section>
    // return <div>Favourites Page</div>
}

export default Favourites