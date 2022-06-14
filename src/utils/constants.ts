export const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export const APIHost = development ? '/api' : 'https://google.com';
export const APINation = 'http://api.training.div3.pgtest.co/api/v1/location'
export const APIPostUser = 'http://api.training.div3.pgtest.co/api/v1/auth/register'
export const ACCESS_TOKEN_KEY = 'token';
