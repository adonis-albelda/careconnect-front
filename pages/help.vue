<template>
    <div class="personal-care-wrapper help-mainwrapper">
        <div class="help-banner">
            <h3>
                How can we help?
            </h3>
            <div class="help-search">
                <i>&#128269;</i>
                <input placeholder="Ask a question" type="text" />
                <button type="">Search</button>
            </div>
        </div>
        <div class="container">
            <div class="personal-inner-cont help-content-mwrapper">
                <div class="p-col-1">
                    <div class="help-sidenav">
                        <li @click="goTo('help-faq')" :class="$route.name == 'help-faq' ? 'active' : '' ">F.A.Q.</li>
                        <li @click="goTo('help-terms_and_condition')" :class="$route.name == 'help-terms_and_condition' ? 'active' : '' ">Terms & Conditions</li>
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

    .p-col-1 {
        @media (max-width: 991px) {
            width: 100% !important;
        }
    }
}

.help-content-mwrapper {
    padding: 30px 0;
}

.help-banner {
    text-align: center;
    padding: 70px 0;
    background: #183891;
    h3 {
        text-align: center;
        color: #fff;
        font-size: 35px;
    }
}

.help-sidenav {

    li{
        list-style: none;
        font-size: 22px;
        font-weight: 600;
        margin: 5px 0;
        color: #000;
        cursor: pointer;
        
        &.active {
            color: #183891;
        }

        @media (max-width: 991px) {
            text-align: center;
        }
    }
}

.help-search {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    position: relative;

    i {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        font-size: 16px;
        display: flex;
        align-items: center;
        padding: 0 20px;
    }

    input {
        width: 618px !important;
        height: 70px !important;
        outline: none;
        box-shadow: none;
        font-size: 1.2rem;
        background-color: transparent;
        border-color: rgba(255, 255, 255, 0.2);
        padding-left: 60px;
        width: 100%;
        border-radius: 5px;
        color: #fff;
        position: relative;
    }

    button {
        width: 160px;
        font-size: 16px;
    }
}

</style>