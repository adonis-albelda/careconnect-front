<template>
    <div style="width: 595px; height: 842px;background-color: #fff;margin: auto;margin-top:3%;">
        <table style="width: 100%;">
            <tbody>
                <tr style="padding-top: 100px;padding-bottom: 100px;display: block;">
                    <div>
                        <img style="width: 20%;margin: auto;" src="images/logo.png" alt="careconnect logo" />
                    </div>
                    <div style="text-align: center;">
                        <p style="font-size: 24px;line-height: 36px;font-weight: 600; color: #000;">Care Connect</p>
                        <p style="font-size: 12px;line-height: 18px;font-weight: 500;color: #000">Care that comes to you</p>
                    </div>
                </tr>

                <tr>
                    <td colspan="2">
                        <p style="font-size: 12px;line-height: 18px;font-weight: 600;color: #000;align-items: center;display: flex;margin-left: 180px;gap: 10px;margin-bottom: 10px;"><img src="images/icons/mail.svg"> admin@ucarecon.ca</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p style="font-size: 12px;line-height: 18px;font-weight: 600;color: #000;align-items: center;display: flex; margin-left: 180px;gap: 10px;margin-bottom: 10px;"><img src="images/icons/smartphone.svg"> 416-262-4071</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p style="font-size: 12px;line-height: 18px;font-weight: 600;color: #000;align-items: center;display: flex; margin-left: 180px;gap: 10px;margin-bottom: 10px;"><img src="images/icons/location_pin.svg"> 120 Shelborne North York On.<br/> Canada M6B 1M7</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding-top: 40px;">
                        <div style="background: #183891;">
                            <img style="height: 163px;width: 100%;object-fit: cover;" src="/images/login-img.png" alt="image">
                        </div>
                    </td>
                </tr>

                <tr>
                    <div style="margin-top: 90px;padding-left: 30px;">
                        <td style="width: 22%;font-size: 10px;line-height: 15px;font-weight: 500;color: #000;">
                            <p style="display: flex;align-items: center;gap: 6px;"><i style="font-size: 11px;" class="icon-facebook"></i> Care Connect</p>
                        </td>
                        <td style="width: 22%;font-size: 10px;line-height: 15px;font-weight: 500;color: #000;">
                            <p style="display: flex;align-items: center;gap: 6px;"><i class="icon-twitter"></i> @careconnectca</p>
                        </td>
                        <td style="width: 22%;font-size: 10px;line-height: 15px;font-weight: 500;color: #000;">
                            <p style="display: flex;align-items: center;gap: 6px;"><i class="icon-instagram"></i> Care Connect</p>
                        </td>
                        <td style="width: 30%;font-size: 10px;line-height: 15px;font-weight: 500;color: #000;text-align:end;">
                            <p>www.ucarecon.ca</p>
                        </td>
                    </div>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  auth:false,
  head: {
    bodyAttrs: {
      id: 'pdf-page',
      class: 'pdf-page'
    },
  },
}
</script>