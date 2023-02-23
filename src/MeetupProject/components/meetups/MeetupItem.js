import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import {useContext} from 'react'
import FavoritesContext from '../../../store/favorites-context';
const MeetupItem = (props)=>{
    const meetup = props.meetup

    // using the context we have in store
    const favouritesCtx = useContext(FavoritesContext)
    const  itemIsFavorite = favouritesCtx.itemIsFavorite(props.id)
    const toggleFavoriteStatusHandler =()=>{
        itemIsFavorite ? favouritesCtx.removeFavourite(props.id) : favouritesCtx.addFavourite({id: props.id, title: props.title, description: props.description, image: props.image, address: props.address})
    }
    return <li className={classes.item}>
        {/* wrapping all the contents betn <card></card> tag allows all the contents to be used as children */}
        <Card>
            <div className={classes.image}>
                <img src={meetup.image} alt = {meetup.title}></img>
            </div>

            <div className={classes.content}>
                <h3>{meetup.title}</h3>
                <address>{meetup.address}</address>
                <p>{meetup.description}</p>
            </div>

            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favourites' : 'To Favourites'}</button>
            </div>
        </Card>
    </li>
}

export default MeetupItem