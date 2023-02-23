// import Todo from "./ToDoProject/components/Todo";
import {Routes,Route} from 'react-router-dom'
import AllMeetupsPages from './MeetupProject/pages/AllMeetups';
import NewMeetup from './MeetupProject/pages/NewMeetup';
import Favourites from './MeetupProject/pages/Favourites';
import MainNavigation from './MeetupProject/components/layout/MainNavigation';

function App() {


  return (
    <div>
      <MainNavigation />
      {/* this is how you define route.....each route must be within routes component */}
     
     
     <Routes>
    {/* default path */}

      <Route path='/' element={<AllMeetupsPages />} />

      <Route path='/new-meetup' element={<NewMeetup />} />

      <Route path='/favourites' element={<Favourites />} />
    

    {/* Below is for Todo project */}
    {/* <h1>My Todos</h1> */}
    {/* self closing tag....custom components need to start with capital */}
    {/* <Todo title = 'First title'/> */}
    {/* <Todo  title = 'Second title'/> */}


    </Routes>
   </div>
  );
}

export default App;
