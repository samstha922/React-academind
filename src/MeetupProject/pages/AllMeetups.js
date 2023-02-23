// concept unclear are from 2hr 54secs: fetching data, useEffect
// useContext: React based state mgmt solution to manage application wide states/global states. Also there are 3rd party state mgmt framworks : Redux, Mobx
import MeetupList from '../components/meetups/MeetupList'
import {useEffect, useState} from 'react'
// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//   ];

const AllMeetupsPages = ()=>{
  let x=0
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])
  // Below is VVIP concept which needs to  be revised 
  useEffect(()=>{
    // console.log('use Effect here')
    setIsLoading(true)
    fetch('https://firstreactprojectacademind-default-rtdb.firebaseio.com/meetups.json').then(response =>{
      // console.log('response is:',response.json())
  
      // response.json will return a promise as well so need to add another then block to access the data
      // No understandable data when console logging
      console.log('respones.json', response)
      return response.json();
    }).then(data=>{
      // ******IMP from below for data manipulation
      //data is  in format: {k1:{},k2:{}, k3:{}...} and we need to convert it into [{k1:{}, k2:{},k3:{}}].why? there is a map function in the child component <MeetupList> and logic are based on that.
      console.log('data', data)
      const meetups = [];
      for (const key in data){
        const meetup= {
          id: key,
          ...data[key] //spread operator is VVIP concept
        };
        meetups.push(meetup)
      }
      console.log('meetups', meetups)
      setIsLoading(false);
      setLoadedMeetups(meetups);
      })
      // Rule: in below dependency array; u should add all external values your effect relies on. In our case, there are none ext. values, so empty array. Eg. const url = props.url vako vaye, we would add props in the dependency. 
  }, [])

    if (isLoading){
      return <section><p>Loading</p></section>
    }

    return (
        <section>
            <h1>All Meetups</h1>
            {/* <MeetupList meetups={DUMMY_DATA} /> */}
            <MeetupList meetups={loadedMeetups} />
            
            
            
            {/* {DUMMY_DATA.map(meetup=>{
                return <li key={meetup.id}>{meetup.title}</li>
            })}     */}
        </section>
    )
}

export default AllMeetupsPages