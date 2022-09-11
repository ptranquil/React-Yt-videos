import axios from 'axios';
const KEY = 'AIzaSyAppfH80zlvY0zu6r-fRrq_joRlKhRu1R8'

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        type : 'video',
        maxResults : 50,
        key : KEY
    }
});