<template>
    <div style="width: 100%; height: 100%;background-color: #fff;margin: auto;margin-top:3%;padding-left: 3%;">
        <table style="width: 100%;">
            <tbody>
                <tr style="gap: 20px;padding-top: 70px;padding-bottom: 35px;">
                    <div style="width: 20%;">
                        <img style="width: 100%;" src="images/logo.png" alt="careconnect logo" />
                    </div>
                    <div style="width: 80%;">
                        <p style="font-size: 24px;line-height: 36px;font-weight: 600; color: #000;">Care Connect</p>
                        <p style="font-size: 12px;line-height: 18px;font-weight: 500;color: #000">Care that comes to you</p>
                    </div>
                </tr>
                <tr>
                    <td colspan="2">
                        <div style="background: #183891;">
                            <img style="height: 300px;width: 100%;object-fit: cover;" src="/images/login-img.png" alt="image">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="padding-top: 30px;">
                        <p style="font-size: 12px;line-height: 18px;font-weight: 500;color: #000">Prepared for :</p>
                        <p style="font-size: 12px;line-height: 18px;font-weight: 500;color: #000;margin-top: 20px;">Prepared by : Care Connect</p>
                    </td>
                </tr>
                <tr>
                    <div style="margin-top: 150px;">
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