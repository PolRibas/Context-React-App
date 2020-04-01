import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: `${process.env.API_URL}/api/auth`,
      withCredentials: true
    })
  }

  async signup(user) {
    const { username, password, email} = user;
    const { data } = await this.auth.post('/signup', { username, password, email });
      return data;
  }

  async login(user) {
    const { username, password } = user;
    const { data } = await this.auth.post('/login', { username, password });
      return data;
  }

  async logout() {
    const response = await this.auth.post('/logout');
      return response.data;
  }

  async me() {
    const response = await this.auth.get('/me');
      return response.data;
  }
}

const auth = new AuthService();

export default auth