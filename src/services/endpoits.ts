const prod = {
  url: {
    API_URL: `https://healthy-food-jarlei3m.vercel.app`
  }
}

const dev = {
  url: {
   API_URL: 'http://localhost:3000'
  }
 };

 export const config = process.env.NODE_ENV === 'development' ? dev : prod;