<template>
    <div class="personal-care-wrapper help-mainwrapper">
        <!-- <div class="help-banner">
            <h3>
                How can we help?
            </h3>
            <div class="help-search">
                <input type="text" />
                <button type="">Search</button>
            </div>
        </div> -->
        <div class="container">
            <div class="personal-inner-cont">
                <div class="p-col-1">
                    <div>
                        <li>F.A.Q.</li>
                        <li>Terms & Conditions</li>
                    </div>
                </div>

                <div class="p-col-2">
                    <Nuxt></Nuxt>
                </div>
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

.help-mainwrapper {
    background-color: #fff !important;
}

.help-banner {
    text-align: center;
    padding: 70px 0;
    background: #183891;
    h3 {
        text-align: center;
    }
}

.help-search {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    input {
        width: 618px;
    }

    button {
        width: 160px;
    }
}
</style>