import client from './client';
// 로그인
export const login = ({ id, password }) =>
  client.post('/api/auth/login', { id, password });

// 회원가입
export const register = ({ id, password, name, email, phone, addr }) =>
  client.post('/api/auth/register', { id, password, name, email, phone, addr });

// 비밀번호 변경
export const modify = ({ id, name, password }) =>
  client.patch(`/api/auth/modify/${id}`, { id, name, password });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

//로그아웃
export const logout = () => client.post('/api/auth/logout');

//댓글에 레벨 표시 하려고 레벨 쿼리해오는 api 
export const findLevel = ({ username }) =>
  client.patch('/api/auth/level', { username });

export const exercise = ({ title, username }) =>
  client.post('/api/auth/exercises', { title, username });

export const updateTotalTime = ({ username, totalTime }) =>
  client.patch(`/api/auth/exercises`, { username, totalTime });
