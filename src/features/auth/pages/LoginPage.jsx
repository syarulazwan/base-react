import LoginForm from '../components/LoginForm'

function LoginPage() {
  return (
    <main className="auth-page">
      <section className="auth-panel">
        <h1>Login</h1>
        <LoginForm />
      </section>
    </main>
  )
}

export default LoginPage
