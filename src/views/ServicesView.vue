<template>
  <div>
    <h1 v-if="header" class="text-4xl font-bold text-blue-700 mb-6">{{ header }}</h1>
    <p v-if="description" class="text-gray-600 max-w-3xl mx-auto text-lg mb-4">{{ description }}</p>
    <div class="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <div v-for="(service, index) in Services" :key="index" class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-2">{{ service.title }}</h2>
        <p class="text-gray-600">{{ service.description }}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "ServicesView",
  data() {
    return {
      Services: [
        {
          title: "Academic Support",
          description: "Personalized tutoring and mentoring to help students excel in their studies.",
        },
        {
          title: "Career Counseling",
          description: "Guidance on career paths, internships, and job placements.",
        },
        {
          title: "Health and Wellness",
          description: "Programs promoting physical and mental well-being for students.",
        },
      ],
      header: "Our Services",
      description: "Explore the range of services we offer to support our students' academic and personal growth.",
    };
  },
};
</script>