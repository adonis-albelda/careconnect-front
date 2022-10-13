<template>
  <div class="personal-care-wrapper">
    <div class="container">
      <a class="back" href="#"><img src="/images/arrow-left.png" /> Back</a>

      <div class="personalcare-banner">
        <img src="/images/complex_care_services_banner.jpg" />
      </div>

      <div class="personal-inner-cont">
        <div class="p-col-1">
          <div>
            <h1>Complex Care Services</h1>
          </div>
        </div>

        <div class="p-col-2">
          <div class="service-desc">
            <p class="normal-text">
              Our experienced and highly trained caregivers provide the highest quality of care to both patients and their families. Our goal is to help individuals and their loved ones live happy and fulfilling lives.
            </p>
          </div>

          <div class="service-list">
            <p class="sub-title psubtitle">
              Complex care refers to services that must be performed by a
              regulated health professionals, such as a Registered Nurse or a
              Registered Practical Nurse. <br />
              These services include:
            </p>

            <ul>
              <li>Medication administration</li>
              <li>Vital signs monitoring</li>
              <li>Wound care</li>
              <li>Catheter care</li>
              <li>Foot care</li>
              <li>Ostomy care</li>
              <li>Palliative care</li>
            </ul>
            <a
              href="#"
              class="personal-care-btn"
              @click.prevent="
                goTo('get-quote', {}, { service: 'complex-service' })
              "
              >Get a Quote</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'MainLayout',
  auth: false,
  head: {
    bodyAttrs: {
      id: 'personal-care-page',
      class: 'services-page',
    },
  },
}
</script>

<style lang="scss" scoped>
.personalcare-banner img {
  width: 100%;
}
</style>
