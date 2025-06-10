<template>
  <div class="gallery container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-blue-600 mb-8 text-center font-poppins">School Gallery</h1>

    <div v-if="loading" class="text-center text-gray-600">
      <i class="fas fa-spinner fa-spin text-3xl"></i>
      <p class="mt-2">Loading images...</p>
    </div>

    <div v-else-if="error" class="text-center text-red-600">
      <p>{{ error }}</p>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="photo in photos"
        :key="photo.id"
        class="relative group overflow-hidden rounded-lg shadow-lg"
      >
        <img 
          :src="photo.download_url" 
          :alt="photo.author" 
          class="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <p class="text-white text-sm font-roboto">{{ photo.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryView",
  data() {
    return {
      photos: [],
      loading: true,
      error: null,
    };
  },
  async mounted() {
    try {
      const response = await fetch("https://picsum.photos/v2/list?page=1&limit=12");
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();
      this.photos = data;
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.gallery {
  background-color: #f9fafb;
}
img {
  transition: transform 0.3s ease-in-out;
}
</style>
