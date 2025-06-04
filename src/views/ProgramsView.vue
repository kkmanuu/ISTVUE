<template>
  <div class="programs container mx-auto px-4 py-8" v-if="showPrograms">
    <h1 class="text-3xl font-bold text-blue-600 mb-4">Our Programs</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-2">Academic Excellence</h2>
        <p class="text-gray-600">Rigorous courses in STEM, humanities, and arts to prepare students for higher education.</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-2">Extracurricular Activities</h2>
        <p class="text-gray-600">Sports, music, and clubs to develop leadership and teamwork skills.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPrograms: true,
    };
  },
};

</script>
