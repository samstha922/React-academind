
// to navigate programitacally
import {useNavigate} from 'react-router-dom'
import  NewMeetupForm  from "../components/meetups/NewMeetupForm"

const NewMeetup = ()=>{
    const navigate = useNavigate()
    console.log('navigate',navigate)

    const addMeetupHandler=(meetupData)=>{
        console.log('meetupdata is', meetupData)
        // fetch is Vanilla JS method to send http request.Default fetch sends get request. also we could use 3rd party axios.
        // This data is passed into Firebase server which can be seen in Firebase's realTimeDatabase function
        // Note: on top of link need to add meetups.json to create a new api
        // fetch returns a promise
        fetch('https://firstreactprojectacademind-default-rtdb.firebaseio.com/meetups.json',{
            method: 'POST',
            body: JSON.stringify(meetupData),
            // metadata meaning? -> data about data
            // headers contains metaData so we've passed the metadata here
            headers:{
                'Content-Type':'application/json'
            }
        }).then(()=>{
            // // pushes new page on the top of the current page.
            // is usehistory() outdated?? Ans: yes, its deprecate in v6 of react-route and is replaced by useNavigate hook 
            // history.push()
            console.log('reached here')
            navigate('/')
        })
    }
    return (
        <section>
            <div><h1>Add New Meetup</h1></div>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
        )
}

export default NewMeetup