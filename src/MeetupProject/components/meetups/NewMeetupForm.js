// U wouldn't connect React directly with your db. WHy? Security flaws...all the react codes will be exposed in source build file if you look into the network tab. So db credentials will also be exposed. So u need to conenct to backend server via api and then to db
// In this project we will use firebase - backend as a service (BaaS) offered by google which contains db and api. Categorized as NoSQL program
import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'
import { useRef } from 'react'
const NewMeetupForm=(props)=>{
    console.log('props', props)
    // reference must be defined in the top level elements only
    // The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render
    //  when updated.
    // It can be used to access a DOM element directly.If we tried to count how many times our application renders using the useState Hook, 
    // we would be caught in an infinite loop since this Hook itself causes a re-render.
    // To avoid this, we can use the useRef Hook. useRef() only returns one item. It returns an Object called current.
    // When we initialize useRef we set the initial value: useRef(0)
    
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()
    const value =1

    const formSubmitHandler=(event)=>{
        // 1. prevent default
        // 2. handle the input
        // 3. send the data to the parent (what is 2-way binding? 
            // how to send data from child to parent component?Ans: we haven't passed the props from child to parent here..rather what we've done is passed a fxn from parent to child which takes arg 'meetupData' so that fxn is triggered when add meetup btn is called
        // this is Vanilla JS event function to handle submission with just JS and react

        event.preventDefault()
        const enteredTitle = titleInputRef.current.value
        const enteredImage = imageInputRef.current.value
        const enteredAddress = addressInputRef.current.value
        const enteredDescription = descriptionInputRef.current.value

        const meetupData={
            title:enteredTitle,
            image:enteredImage,
            address:enteredAddress,
            description:enteredDescription
        }

        props.onAddMeetup(meetupData)
    }
    return (
        <Card>
            {/* <div>
                 <p>THis is a text</p>
            </div> */}
            <form className={classes.form} onSubmit={formSubmitHandler}>
                    <div className={classes.control}>
                        {/* for keyword 'htmlFor' is another keywork to connect label to the input 'title' */}
                        <label htmlFor="title">Meetup Title</label>
                        <input type='text' required id='title' ref={titleInputRef}/>
                    </div>

                    <div className={classes.control}>
                        <label htmlFor="image">Image</label>
                        <input type='url' id='image' ref={imageInputRef} />
                    </div>

                    <div className={classes.control}>
                        <label htmlFor="address">Address</label>
                        <input type='text' required id='address' ref={addressInputRef}/>
                    </div>

                    <div className={classes.control}>
                        <label htmlFor="description">Description</label>
                        {/* default in html nowdays 'textarea' */}
                        <textarea required id='description' rows={5} ref={descriptionInputRef}/>
                    </div>

                    <div className={classes.actions}>
                        <button>Add Meetup</button>
                    </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm