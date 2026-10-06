import { useAuth } from '../../auth/hooks/useAuth'
import UserList from '../components/UserList'
import { useUsers } from '../hooks/useUsers'

function UsersPage() {
  const { logout } = useAuth()
  const { data: users = [], isLoading, error } = useUsers()

  return (
    <main className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Protected route</p>
          <h1>Users</h1>
        </div>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </header>

      {isLoading ? <p>Loading users...</p> : null}
      {error ? <p className="error">{error.message}</p> : null}
      {!isLoading && !error ? <UserList users={users} /> : null}
    </main>
  )
}

export default UsersPage
