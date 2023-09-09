<template>
  <div class="relative w-full h-full bg-slate-200 p-7 overflow-hidden rounded-2xl font-serif ">
    <div class="w-full h-min flex items-center justify-between">
      <font-awesome-icon icon="fa-solid fa-location-dot" class="absolute text-slate-900 text-2xl pl-1" />
      <input v-model="city"
        class="text-slate-900 w-4/5 uppercase text-2xl font-medium pl-8 rounded-md placeholder:text-xl placeholder:capitalize"
        type="text" placeholder="Digite sua localização" />
      <button @click="fetchData" class="cursor-pointer w-10 h-10 bg-slate-300 rounded-xl text-lg hover:bg-slate-900 ">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </button>
    </div>
    <div class="text-center">
      <p class="relative text-4xl font-extrabold pt-8 text-slate-900 capitalize"> {{ weather }}</p>
      <p class="relative text-4xl font-extrabold pt-8 text-slate-900"> {{ temperature }} °C</p>
    </div>
    <div class="w-full flex justify-between mt-8 ">
      <div class="flex items-center w-1/2 h-24  ">
        <font-awesome-icon icon="fa-solid fa-water" class="pr-2" />
        <p class="text-slate-900">Humidade: {{ humidity }} %</p>
      </div>
      <div class="flex items-center w-1/2 h-24">
        <font-awesome-icon icon="fa-solid fa-wind" class="pr-4" />
        <p class="text-slate-900">Vento: {{ wind }} Km/h</p>
      </div>
    </div>
  </div>
</template>


<script >
import axios from 'axios'

export default {
  data() {
    return {
      city: null,
      temperature: '0',
      weather: 'Digite a cidade',
      humidity: '0',
      wind: '0',
      api: ''
    }
  },
  methods: {
    translateWeatherDescription(description) {
      const translations = {
        'clear sky': 'céu limpo',
        'few clouds': 'poucas nuvens',
        'scattered clouds': 'nuvens dispersas',
        'broken clouds': 'nuvens quebradas',
        'overcast clouds': 'nuvem pra caralho',
        'light rain': 'chuvinha fraquinha',
        'moderate rain': 'chuvinha moderada',
        'heavy rain': 'chuva intensa',
      };

      return translations[description] || description;
    },

    fetchData() {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.api}`)
        .then((response) => {
          const weatherData = response.data;
          this.temperature = weatherData.main.temp;
          this.weather = this.translateWeatherDescription(weatherData.weather[0].description);
          this.humidity = weatherData.main.humidity;
          this.wind = weatherData.wind.speed;
        })
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>

