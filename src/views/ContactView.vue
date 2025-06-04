<template>
  <div class="contact container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-blue-700 mb-6">Contact Us</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
        <p class="text-gray-600 mb-2">Address: 123 Education Lane, Knowledge City, 12345</p>
        <p class="text-gray-600 mb-2">Phone: (123) 456-7890</p>
        <p class="text-gray-600 mb-2">Email: info@horizonacademy.edu</p>
      </div>
      <div>
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Send a Message</h2>
        <form class="space-y-4">
          <input type="text" placeholder="Name" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <input type="email" placeholder="Email" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <textarea placeholder="Message" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" rows="5"></textarea>
          <button type="submit" class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>