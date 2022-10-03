<template>
    <div class="personal-care-wrapper">
        <div class="personal-inner-cont">
            <div class="service-desc">
                <h1 class="title">
                    Terms & Conditions
                </h1>
            </div>

            <div class="service-list">
                <p class="sub-title psubtitle">
                    Lorem ipsum dolor sit amet
                </p>

                <p class="normal-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien dolor,
                    pretium feugiat pulvinar in, commodo in quam. Vestibulum condimentum, tortor
                    ac varius rhoncus, quam lectus rhoncus ante, eget mattis elit erat ac risus.
                    Pellentesque tempor odio sed est accumsan tempor. Nam egestas mauris neque,
                    sit amet finibus eros convallis a. Praesent luctus enim at consectetur placerat.
                    Fusce malesuada ac mi ut auctor. Vestibulum finibus pulvinar erat, id tempor sem
                    fermentum eu. Sed dictum facilisis orci, vel rutrum nibh efficitur a.
                </p>

                <p class="normal-text">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Sed vel purus ac leo dictum laoreet. Proin sed posuere erat.
                    Donec pharetra eros erat. Aliquam erat volutpat. Etiam mattis aliquam lectus,
                    a porttitor eros rutrum a. Ut lacinia efficitur velit at pharetra. Sed fermentum
                    tortor sit amet eleifend lacinia. Interdum et malesuada fames ac ante ipsum primis
                    in faucibus. Donec dapibus dictum erat commodo semper. Phasellus nulla odio,
                    lacinia luctus est posuere, interdum ultricies sapien. Pellentesque velit sem,
                    blandit non feugiat quis, euismod at sem. Duis lobortis, metus eu facilisis
                    pellentesque, diam magna eleifend arcu, et commodo nisl odio eget purus.
                </p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  layout: 'MainLayout',
  auth:false,
  head: {
    bodyAttrs: {
      id: 'personal-care-page',
      class: 'services-page'
    },
  },
}
</script>

<style lang="scss" scoped>
.personalcare-banner img {
    width: 100%;
}
</style>