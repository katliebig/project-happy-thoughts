export const API_URL = (page) => `https://hearts-happy-thoughts-api.herokuapp.com/thoughts?page=${page}`
export const LIKES_URL = (messageID) => `https://hearts-happy-thoughts-api.herokuapp.com/thoughts/${messageID}/like`
