<template>
  <div>
    <h1 v-if="header" class="text-4xl font-bold text-blue-700 mb-6">{{ header }}</h1>
    <p v-if="description" class="text-gray-600 max-w-3xl mx-auto text-lg mb-4">{{ description }}</p>

    <div class="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <div v-for="(image, index) in images" :key="index" class="bg-white p-6 rounded-lg shadow-md">
        <img
          :src="image.download_url"
          :alt="image.author"
          class="w-full h-48 object-cover rounded mb-4"
        />
        <h2 class="text-xl font-semibold mb-2">Author: {{ image.author }}</h2>
        <a :href="image.url" target="_blank" class="text-blue-500 underline">View on Unsplash</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageGalleryView",
  data() {
    return {
      images: [],
      header: "Image Gallery",
      description: "A collection of beautiful images sourced from Unsplash via Picsum.",
    };
  },
  mounted() {
    fetch("https://picsum.photos/v2/list?page=1&limit=6")
      .then((response) => response.json())
      .then((data) => {
        this.images = data;
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  },
};
</script>
