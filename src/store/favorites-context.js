import {createContext, useState} from 'react'
// global application wide context : using UseContext
// below contains React context...capital case since context is creating a react component
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    // Note: adding the fxn here just to help with autocompletion
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
})

// below: regular react component with job of updating context values and providing this context to all the components interested in listening the values 
// Note: if u remember ThemeProvider, it is implemented and then passed to App.tsx <ThemeProvider> wrapping whole component</ThemeProvider>. This is similar to that.
// need to export the provider; since we need to interact with this outside current file
export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([])

    const addFavoriteHandler = (favoriteMeetup) => {
        // NOTE: React states doesn't update the states instantly ; it updates it quickly on the background but not instantly
        // Below we are passing fxn as parameter in 'setUserFavourites(()=>{})' rather than normal props eg. setUserFavourites(props) cuz this would ensure the fxn will always have the latest snapshot 
        //      of the previous value.
        setUserFavorites(prevUserFavorites =>{
            
            return prevUserFavorites.concat(favoriteMeetup)
        })
    }

    const removeFavoriteHandler = (meetupId) => {
        setUserFavorites(prevUserFavorites=>{
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        })
    } 

    const itemIsFavoriteHandler = (meetupId) =>{
        return userFavorites.some(meetup => meetup.id === meetupId )

    }

    const context={
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        // just pointing the path to fxn here; note: not calling the fxn but just pointing it 
        addFavourite: addFavoriteHandler,
        removeFavourite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    
    
    // Provider is an component that context obj has built in. all the components that wants to interact with context needs to be wrapped 
    // inside provider. 
    // value below changes and the state changes to every component listening to it
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

// need to export FavoritesContext too
export default FavoritesContext;  