<template>
  <div>
    <nav class="bg-gradient-to-r from-blue-800 to-teal-600 text-white shadow-xl sticky top-0 z-50">
      <div class="container mx-auto px-6 py-6">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div class="flex items-center">
            <img src="https://via.placeholder.com/80" alt="School Logo" class="h-16 mr-4" />
            <span class="text-3xl font-bold font-poppins">Horizon Academy</span>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-12">
            <router-link 
              to="/" 
              class="text-white hover:text-yellow-300 font-medium font-roboto text-lg transition duration-300 ease-in-out transform hover:scale-110"
            >
              Home
            </router-link>
            <router-link 
              to="/about" 
              class="text-white hover:text-yellow-300 font-medium font-roboto text-lg transition duration-300 ease-in-out transform hover:scale-110"
            >
              About
            </router-link>
            <router-link 
              to="/programs" 
              class="text-white hover:text-yellow-300 font-medium font-roboto text-lg transition duration-300 ease-in-out transform hover:scale-110"
            >
              Programs
            </router-link>
            <!-- Dropdown for Admissions -->
            <div class="relative group">
              <button class="text-white hover:text-yellow-300 font-medium font-roboto text-lg transition duration-300 ease-in-out flex items-center">
                Admissions
                <i class="fas fa-chevron-down ml-2"></i>
              </button>
              <div class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg mt-2 w-56 border border-gray-200">
                <router-link 
                  to="/admissions/apply" 
                  class="block px-5 py-3 text-gray-700 hover:bg-yellow-50 hover:text-blue-800 font-roboto"
                >
                  Apply Now
                </router-link>
                <router-link 
                  to="/admissions/tuition" 
                  class="block px-5 py-3 text-gray-700 hover:bg-yellow-50 hover:text-blue-800 font-roboto"
                >
                  Tuition
                </router-link>
              </div>
            </div>
            <router-link 
              to="/contact" 
              class="text-white hover:text-yellow-300 font-medium font-roboto text-lg transition duration-300 ease-in-out transform hover:scale-110"
            >
              Contact
            </router-link>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button @click="toggleMenu" class="text-white focus:outline-none">
              <i :class="isOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-3xl"></i>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isOpen" class="md:hidden mt-6 bg-white rounded-lg p-6 shadow-lg">
          <router-link 
            to="/" 
            class="block py-3 text-gray-700 hover:text-blue-800 font-medium font-roboto text-lg"
            @click="toggleMenu"
          >
            Home
          </router-link>
          <router-link 
            to="/about" 
            class="block py-3 text-gray-700 hover:text-blue-800 font-medium font-roboto text-lg"
            @click="toggleMenu"
          >
            About
          </router-link>
          <router-link 
            to="/programs" 
            class="block py-3 text-gray-700 hover:text-blue-800 font-medium font-roboto text-lg"
            @click="toggleMenu"
          >
            Programs
          </router-link>
          <div class="py-3">
            <button 
              @click="toggleAdmissions" 
              class="block w-full text-left text-gray-700 hover:text-blue-800 font-medium font-roboto text-lg flex items-center"
            >
              Admissions
              <i :class="isAdmissionsOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'" class="ml-2"></i>
            </button>
            <div v-if="isAdmissionsOpen" class="pl-4 mt-2">
              <router-link 
                to="/admissions/apply" 
                class="block py-2 text-gray-700 hover:text-blue-800 font-roboto"
                @click="toggleMenu"
              >
                Apply Now
              </router-link>
              <router-link 
                to="/admissions/tuition" 
                class="block py-2 text-gray-700 hover:text-blue-800 font-roboto"
                @click="toggleMenu"
              >
                Tuition
              </router-link>
            </div>
          </div>
          <router-link 
            to="/contact" 
            class="block py-3 text-gray-700 hover:text-blue-800 font-medium font-roboto text-lg"
            @click="toggleMenu"
          >
            Contact
          </router-link>
        </div>
      </div>
    </nav>
    <router-view />

    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
          <!-- About Section -->
          <div>
            <h3 class="text-2xl font-bold font-poppins text-yellow-400 mb-4">About Horizon Academy</h3>
            <p class="text-gray-200 text-sm leading-relaxed">
              Horizon Academy fosters academic excellence and personal growth in a supportive, inclusive environment.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-2xl font-bold font-poppins text-yellow-400 mb-4">Quick Links</h3>
            <ul class="text-gray-200 text-sm space-y-2">
              <li><router-link to="/" class="hover:text-yellow-300 transition">Home</router-link></li>
              <li><router-link to="/about" class="hover:text-yellow-300 transition">About</router-link></li>
              <li><router-link to="/programs" class="hover:text-yellow-300 transition">Programs</router-link></li>
              <li><router-link to="/contact" class="hover:text-yellow-300 transition">Contact</router-link></li>
            </ul>
          </div>

          <!-- Contact Section -->
          <div>
            <h3 class="text-2xl font-bold font-poppins text-yellow-400 mb-4">Contact Us</h3>
            <p class="text-gray-200 text-sm"><i class="fas fa-map-marker-alt mr-2"></i> 123 Education Lane, Knowledge City, 12345</p>
            <p class="text-gray-200 text-sm"><i class="fas fa-phone-alt mr-2"></i> (123) 456-7890</p>
            <p class="text-gray-200 text-sm"><i class="fas fa-envelope mr-2"></i> info@horizonacademy.edu</p>
          </div>

          <!-- Social Media -->
          <div>
            <h3 class="text-2xl font-bold font-poppins text-yellow-400 mb-4">Follow Us</h3>
            <div class="flex space-x-6">
              <a href="#" class="text-gray-200 hover:text-yellow-300 transition">
                <i class="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="#" class="text-gray-200 hover:text-yellow-300 transition">
                <i class="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" class="text-gray-200 hover:text-yellow-300 transition">
                <i class="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-10 text-center text-gray-300 text-sm">
          <p>© 2025 Horizon Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false,
      isAdmissionsOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      if (!this.isOpen) this.isAdmissionsOpen = false;
    },
    toggleAdmissions() {
      this.isAdmissionsOpen = !this.isAdmissionsOpen;
    },
  },
};
</script>

<style scoped>
nav a.router-link-exact-active {
  color: #fef08a;
  border-bottom: 3px solid #fef08a;
}
.group:hover .group-hover\:block {
  display: block;
}
</style>