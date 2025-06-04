<template>
  <div class="home bg-gradient-to-r from-blue-800 to-teal-600 text-white py-24 px-6 min-h-screen flex items-center">
    <div class="container mx-auto text-center">
      <h1 class="text-5xl md:text-6xl font-bold font-poppins mb-6">{{ header }}</h1>
      <p class="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-gray-100">{{ description }}</p>
      <router-link 
        to="/programs" 
        class="bg-yellow-400 text-blue-800 font-semibold py-3 px-10 rounded-full hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
      >
        Explore Programs
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    showMore() {
      alert("Discover Horizon Academy!");
    },
  },
  data() {
    return {
      header: "Welcome to Horizon Academy",
      description:
        "Inspiring students to achieve greatness through innovative education and a vibrant community.",
    };
  },
};
</script>

<style scoped>
.home {
  background-image: url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
}
</style>