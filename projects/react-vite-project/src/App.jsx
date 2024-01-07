import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
   {
      userName: 'RodrigoSturm14',
      name: 'Rodrigo Sturm',
      isFollowing: true
   },
   {
      userName: 'kikobeats',
      name: 'Kiko Beats',
      isFollowing: false
   },
   {
      userName: 'midudev',
      name: 'Miguel Angel Duran',
      isFollowing: true
   }
];

export function App(){

   return(
      <section className='App'>
         {
            users.map(user =>{
               const { userName, name, isFollowing } = user;
               return(
                  <TwitterFollowCard 
                  key={userName} 
                  userName={userName} 
                  isFollowing={isFollowing}>
                     {name}
                  </TwitterFollowCard>
               );
            })
         }
      </section>
   );
};


