<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const testimonials = ref([
  {
    name: "Robert M. Dixon",
    image: "https://i.ibb.co.com/mq590b6/image-guests-1.png", // replace with actual image link
    review: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...",
    rating: 5
  },
  {
    name: "Bernadette R. Martin",
    image: "https://i.ibb.co.com/mq590b6/image-guests-1.png", // replace with actual image link
    review: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...",
    rating: 4
  },
  {
    name: "Regina D. Leonard",
    image: "https://i.ibb.co.com/mq590b6/image-guests-1.png", // replace with actual image link
    review: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...",
    rating: 4
  },
  {
    name: "John D. Doe",
    image: "https://i.ibb.co.com/mq590b6/image-guests-1.png", // replace with actual image link
    review: "The service was good and the food was excellent. I had the steak, and it was cooked to perfection.",
    rating: 5
  },
  {
    name: "John D. Doe 1",
    image: "https://i.ibb.co.com/mq590b6/image-guests-1.png", // replace with actual image link
    review: "The service was good and the food was excellent. I had the steak, and it was cooked to perfection.",
    rating: 5
  },
]);

const numVisibleCards = 3;
const visibleTestimonialsCount = testimonials.value.length + 2; // Add extra cards for seamless loop

const extendedTestimonials = computed(() => {
  // Duplicate the first and last testimonial for seamless looping
  return [
    ...testimonials.value.slice(-1), // Last item
    ...testimonials.value,
    ...testimonials.value.slice(0, 1), // First item
  ];
});

const currentIndex = ref(1); // Start at 1 to show the real first card

const updateIndex = (newIndex) => {
  if (newIndex < 1) {
    currentIndex.value = extendedTestimonials.value.length - numVisibleCards - 1;
  } else if (newIndex > extendedTestimonials.value.length - numVisibleCards) {
    currentIndex.value = 1;
  } else {
    currentIndex.value = newIndex;
  }
};

const isActiveDot = (index) => {
  return index === currentIndex.value - 1;
};

const startAutoSlide = () => {
  interval = setInterval(() => {
    updateIndex(currentIndex.value + 1);
  }, 3000);
};

let interval;
onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="max-w-7xl mx-auto py-10 text-center">
    <h2 class="text-red-600 text-lg font-semibold mb-8">Testimonial</h2>
    <h3 class="md:text-[2.1875rem] text-3xl  lg:px-0 font-bold text-blue-900 mb-10 review">Review <span class="guest md:text-[2.1875rem] text-3xl">from our guests </span> </h3>

    <!-- Carousel -->
    <div class="relative flex items-center justify-center space-x-6 overflow-hidden">
      <div class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${(currentIndex - 1) * (100 / numVisibleCards)}%)` }">
        
        <!-- Loop through extended testimonials -->
        <div v-for="(testimonial, index) in extendedTestimonials" :key="testimonial.id"
          class="flex-shrink-0 w-1/3 px-4 py-6 text-center"
          :class="{'scale-105 z-10': index === currentIndex}">
          <img :src="testimonial.image" alt="Testimonial Image"
            class="mx-auto w-24 h-24 rounded-full border-4 border-red-600 mb-4">
          <h4 class="text-lg font-semibold text-blue-900 mb-2">{{ testimonial.name }}</h4>
          <p class="text-gray-600 mt-4 text-center">{{ testimonial.review }}</p>
        <div class="flex justify-center mt-4">
          <span v-for="n in 5" :key="n" class="text-red-600">
            <i :class="n <= testimonial.rating ? 'fas fa-star' : 'far fa-star'"></i>
          </span>
        </div>
        </div>
        
      </div>
    </div>

    <!-- Dots Navigation -->
    <div class="flex justify-center mt-6 space-x-2">
      <span v-for="(testimonial, index) in extendedTestimonials.slice(1, extendedTestimonials.length - numVisibleCards + 1)" :key="index"
        class="cursor-pointer rounded-full w-3 h-3 bg-gray-400"
        :class="{'bg-red-600': isActiveDot(index + 1)}"
        @click="updateIndex(index + 1)"></span>
    </div>
  </div>
</template>

<style scoped>
/* Add styles to make the center card slightly bigger */
.scale-105 {
  transform: scale(1.05);
}
.z-10 {
  z-index: 10;
}

.guest{
    font-family: Roboto;
font-style: normal;
font-weight: 700;
line-height: normal;
color: var(--primary-color, #C33);
}

.review{
font-family: Roboto;
font-style: normal;
font-weight: 700;
line-height: normal;
color: var(--primary-color, #2A435D);
}
</style>
