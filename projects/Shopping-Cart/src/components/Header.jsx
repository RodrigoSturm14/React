import { Filters } from './Filters.jsx';
export function Header({ changeFilters }){
  return(
    <>
      <h1>Hello Shopping Cart!</h1>
      <Filters filterChanged={changeFilters}/>
    </>
  )
}