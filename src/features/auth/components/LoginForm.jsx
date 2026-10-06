import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

function LoginForm() {
  const { login, isLoggingIn, loginError } = useAuth()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await login(form).catch(() => null)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Email
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Password
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </label>

      {loginError ? <p className="error">{loginError.message}</p> : null}

      <button type="submit" disabled={isLoggingIn}>
        {isLoggingIn ? 'Logging in...' : 'Login'}
      </button>
    </form>
  )
}

export default LoginForm
