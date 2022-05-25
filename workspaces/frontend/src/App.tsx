import { gql, useQuery } from '@apollo/client'

import Users from './Users'
import Pagination from './Pagination'

import './App.css'

const GET_USERS_COUNT = gql`
  query GetUsersCount {
    count
  }
`

function App() {
  const { data } = useQuery<{ count: number }>(GET_USERS_COUNT)

  return (
    <div className="App">
      <Pagination count={data?.count || 0} render={(<Users />) as any} />
    </div>
  )
}

export default App
