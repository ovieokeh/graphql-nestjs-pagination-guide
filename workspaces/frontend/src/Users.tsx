import { gql, useQuery } from '@apollo/client'

const GET_USERS = gql`
  query GetUsers($skip: Int!, $amountToFetch: Int!) {
    count
    users(skip: $skip, take: $amountToFetch) {
      id
      firstName
      lastName
    }
  }
`

type User = {
  id: string
  firstName: string
  lastName: string
}

const Users = (props: { skip?: number; amountToFetch?: number }) => {
  const { data } = useQuery<{ count: number; users: User[] }>(GET_USERS, {
    variables: props,
  })

  if (!data?.users) {
    return (
      <div className="skeletons">
        {new Array(props.amountToFetch).fill(1).map((_, index) => (
          <div className="skeleton" key={index}>
            <p />
          </div>
        ))}
      </div>
    )
  }

  const renderedUsers = data?.users?.map(({ id, firstName, lastName }) => {
    const name = `${firstName} ${lastName}`
    return (
      <div key={id}>
        <p>{name}</p>
      </div>
    )
  })

  return <div className="Users">{renderedUsers}</div>
}

export default Users
