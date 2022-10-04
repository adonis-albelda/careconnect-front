<template>
    <div class="help-tab-per-page">
        <div class="detials-wrapper">
            <h1 class="title">
                Frequently Asked Questions
            </h1>

            <div class="help-content">
                <div class="help-content-item">
                    <h5 class="sub-title psubtitle">
                        Lorem ipsum dolor sit amet
                    </h5>

                    <p class="normal-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac neque et
                        augue varius fermentum. Vivamus sed est sapien. Proin nibh mi, dapibus nec
                        quam ut, lobortis consectetur tellus.
                    </p>
                </div>
                <div class="help-content-item">
                    <h5 class="sub-title psubtitle">
                        Lorem ipsum dolor sit amet
                    </h5>

                    <p class="normal-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac neque et
                        augue varius fermentum. Vivamus sed est sapien. Proin nibh mi, dapibus nec
                        quam ut, lobortis consectetur tellus.
                    </p>
                </div>
                <div class="help-content-item">
                    <h5 class="sub-title psubtitle">
                        Lorem ipsum dolor sit amet
                    </h5>

                    <p class="normal-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac neque et
                        augue varius fermentum. Vivamus sed est sapien. Proin nibh mi, dapibus nec
                        quam ut, lobortis consectetur tellus.
                    </p>
                </div>
                <div class="help-content-item">
                    <h5 class="sub-title psubtitle">
                        Lorem ipsum dolor sit amet
                    </h5>

                    <p class="normal-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac neque et
                        augue varius fermentum. Vivamus sed est sapien. Proin nibh mi, dapibus nec
                        quam ut, lobortis consectetur tellus.
                    </p>
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

.help-content {
    margin-top: 30px;

    .help-content-item {
        margin-bottom: 25px;

        h5.psubtitle {
            margin: 0;
            margin-bottom: 5px;
        }

        p {
            margin-bottom: 10px;
        }
    }
}
</style>