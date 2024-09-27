<script setup>
import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag'; // Import Tag component

// Define products data
const products = [
  {
    name: 'Product 1',
    text: 'Birthday Party',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    name: 'Product 2',
    text: 'Wedding Party',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    name: 'Product 3',
    text: 'Bachelor Party',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  
  // Add more products here...
];

// Define responsive options for the carousel
const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1
  }
];

// Define the function to get the severity level for the Tag component
function getSeverity(status) {
  switch (status) {
    case 'In Stock':
      return 'success';
    case 'Low Stock':
      return 'warning';
    case 'Out of Stock':
      return 'danger';
    default:
      return null;
  }
}
</script>

<template >
    <div class="max-w-5xl mx-auto py-8">
    <h1 class="special text-center">SPECIAL SERVICE</h1>
    <h5 class="what text-center py-4">What Special services we are offering now</h5>
        <Carousel :value="products" :numVisible="2" :numScroll="1" :responsiveOptions="responsiveOptions">
    <template #item="slotProps" >
        <div class=" rounded m-2  p-4">
            <div class="mb-4">
                <div class="relative mx-auto">
                    
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                </div>
            </div>
            <div class="mb-4 font-medium">
              <h1 class="text-center nameHeading">{{ slotProps.data.text }} </h1>
              <p class="descriptionText">{{ slotProps.data.description }}</p>
              

            </div>
            
        </div>
    </template>
</Carousel>

    </div>

</template>

<style scoped>
.special{
  color: var(--second-color, #2A435D);
text-align: center;
/* H1 Heading 35px Roboto bold */
font-family: Roboto;
font-size: 2.1875rem;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.what{
  color: var(--primary-color, #C33);
/* H1 Heading 18px Roboto Regular */
font-family: Roboto;
font-size: 1.125rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.nameHeading{
  color: var(--primary-color, #C33);
text-align: center;
/* H1 Heading 35px Roboto bold */
font-family: Roboto;
font-size: 2.1875rem;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-bottom: 20px;
}

.descriptionText{
  color: var(--second-color, #2A435D);
text-align: center;
/* H1 Heading 18px Roboto Regular */
font-family: Roboto;
font-size: 1.2rem;
font-style: normal;
font-weight: 400;
line-height: normal;

}
</style>
