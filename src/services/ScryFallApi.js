import axios from 'axios';

const baseURL = 'https://api.scryfall.com/'

export default axios.create({baseURL});