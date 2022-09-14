class Weather{
  constructor(state){
    this.apiKey='84b92aab9f28445fa0d134221220607'
    this.state=state;
  }

  // Fetch weather from API
  async getWeather(){
  //  const response =await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.state}&days=1&aqi=yes&alerts=yes`);
        
   const response =await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${this.state}&days=4&aqi=yes&alerts=yes`);
        

   
   const responseData=await response.json();
   return responseData;

  }
  changeLocation(state){
     this.state=state;
  }



}
