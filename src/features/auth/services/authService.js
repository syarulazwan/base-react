export const authService = {
  async login(credentials) {
    return {
      user: {
        id: 1,
        name: 'Demo User',
        email: credentials.email,
      },
      token: 'dummy-token',
    }
  },

  async me() {
    return {
      id: 1,
      name: 'Demo User',
      email: 'demo@example.com',
    }
  },
}
