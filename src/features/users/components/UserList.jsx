function UserList({ users }) {
  if (!users.length) {
    return <p>No users found.</p>
  }

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-card">
          <strong>{user.name}</strong>
          <span>{user.email}</span>
        </li>
      ))}
    </ul>
  )
}

export default UserList
