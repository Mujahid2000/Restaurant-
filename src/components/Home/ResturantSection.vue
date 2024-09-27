<script setup>

</script>

<template>
    <div class="max-w-7xl mx-auto">
        <h4 class="text-center sectionTitle py-8">OUR RESTAURANT</h4>
        <div class="flex  justify-between gap-4 items-start">
            <!-- Image Div -->
            <div class="flex flex-col">
                <div class="flex w-full gap-4 mb-4">
                    <img src="https://i.ibb.co.com/KKv4dKR/image-our-Resturant-1.png" alt="" class="w-1/2">
                    <img src="https://i.ibb.co.com/pxNZ3wG/image-our-Resturant-2.png" alt="" class="w-1/2">
                </div>
                <div>
                    <img src="https://i.ibb.co.com/SfB1xxK/image-our-Resturant-3.png" alt="" class="w-full">
                </div>
            </div>
            
            <!-- Text Div -->
            <div class="w-1/2">
                <h1 class="special">For every special occasion <br> there’s heritaste</h1>
                <p class="indigun">Indignation and dislike men who are so beguiled demoralized by the charms of <br> pleasure of the moment. Success Story.</p>

                <!-- div 1 -->
                <div class="flex flex-row py-5 gap-6 items-start">
                    <div class="border border-[#c33] p-5 rounded-full flex justify-center items-center">
                        <img src="https://i.ibb.co.com/jTTZF93/growth-1.png" alt="" class="w-16 h-16">
                    </div>
                    <div class="flex flex-col justify-start">
                        <h1 class="success">Success Story</h1>
                        <p>Certain circumstances and owing to the claims of duty obligations of business it will frequently.</p>
                        <button class="bg-[#c33] mt-4 w-[9rem] h-[2rem] flex justify-center items-center text-white rounded-3xl">Read More
                            <img src="https://i.ibb.co.com/MZgHFgY/Group.png" alt="" class="ml-2 w-4 h-4">
                        </button>
                    </div>
                </div>

                <!-- div 2 -->
                <div class="flex flex-row py-5 gap-6 items-start">
                    <div class="border border-[#c33] p-5 rounded-full flex justify-center items-center">
                        <img src="https://i.ibb.co.com/KhL74nK/cooking-1.png" alt="" class="w-16 h-16">
                    </div>
                    <div class="flex flex-col justify-start">
                        <h1 class="success">Passionate Chefs</h1>
                        <p>Duty or the obligations of business it frequently occurs pleasures have to be repudiated.</p>
                        <button class="mt-4 w-[9rem] h-[2rem] flex justify-center items-center text-[#c33] border border-[#c33] rounded-3xl">Read More
                            <img src="https://i.ibb.co.com/8PcbSrB/Group-1.png" alt="" class="ml-2 w-4 h-4">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.special {
    color: var(--second-color, #2A435D);
    font-family: Roboto;
    font-size: 2.1875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.indigun {
    color: var(--second-color, #2A435D);
    font-family: Roboto;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 2rem;
}

.sectionTitle {
    font-family: Roboto;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #C33;
}

.success {
    font-family: Roboto;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #C33;
}

button img {
    margin-left: 0.5rem;
}
</style>
