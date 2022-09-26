<template>
    <div class="personal-care-wrapper">
        <div class="container">
            <a class="back" href="#"><img src="/images/arrow-left.png"> Back</a>

            <div class="personalcare-banner">
                <img src="/images/personal-care-banner.png">
            </div>

            <div class="personal-inner-cont">
                <div class="p-col-1">
                    <div class="pc-price">
                        <a href="#">1 hr</a>
                        <span>|</span>
                        <a href="#">C$50</a>
                    </div>
                    <div>
                        <h1>Personal Care Services</h1>
                    </div>
                </div>

                <div class="p-col-2">
                    <div class="service-desc">
                        <p>Arthritis, physical disabilities, and age-related conditions are some of the few circumstances that prevent patients from caring for themselves. Our caregivers can assist you with daily tasks such as mobility, eating, exercising, and grooming.</p>
                    </div>

                    <div class="service-list">
                        <p class="sub-title">
                            Personal care service includes assistance with the private activities of daily living such as:
                        </p>

                        <ul>
                            <li>Prepare breakfast ( refer to client profile for nutritional needs and preferences )</li>
                            <li>Provide Medication reminder (client medication is stored in the blister package on the top of the fridge)</li>
                            <li>Assist with personal care (client may not want to shower daily)</li>
                            <li>Assist with dressing (encourage independence with clothing choice, assist with fine motor activities like buttons)</li>
                            <li>Accompany on a walk outdoors (weather permitting)</li>
                            <li>Engage in recreational activity (conversation, listening to an audio book, or baking)</li>
                            <li>Supervise prescribed physiotherapy exercises</li>
                            <li>Supervise transfers and ensure the client is using their walker properly.</li>
                        </ul>

                        <p class="sub-title">Trained and certified Personeal Support Workers provide all personal support services</p>

                        <a href="#" class="personal-care-btn">Book now</a>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  layout: 'MainLayout',
  head: {
    bodyAttrs: {
      id: 'personal-care-page',
    },
  },
}
</script>