<template>
    <div class="pdf-wrapper">
        <table>
            <tbody>
                <tr class="logo">
                    <div>
                        <img src="images/logo.png" alt="careconnect logo" />
                    </div>
                    <div class="logo-title">
                        <p>Care Connect</p>
                        <p>Care that comes to you</p>
                    </div>
                </tr>

                <tr>
                    <td colspan="2" class="contact">
                        <p><img src="images/icons/mail.svg"> admin@ucarecon.ca</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="contact">
                        <p><img src="images/icons/smartphone.svg"> 416-262-4071</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="contact">
                        <p><img src="images/icons/location_pin.svg"> 120 Shelborne North York On.<br/> Canada M6B 1M7</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="blue-bg">
                        <div>
                            <img src="/images/login-img.png" alt="image">
                        </div>
                    </td>
                </tr>

                <tr class="pdf-footer">
                    <div>
                        <td>
                            <tr>
                                <td>
                                    <p><i class="icon-facebook"></i> Care Connect</p>
                                </td>
                                <td>
                                    <p><i class="icon-twitter"></i> @careconnectca</p>
                                </td>
                                <td>
                                    <p><i class="icon-instagram"></i> Care Connect</p>
                                </td>
                            </tr>
                        </td>
                        <td>
                            <p>www.ucarecon.ca</p>
                        </td>
                    </div>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
    .pdf-wrapper {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        font-family: 'Poppins', sans-serif;
        position: relative;
    }

    table {
        width: 100%;
    }

    table tr.logo {
        padding-top: 100px;
        padding-bottom: 100px;
        display: block;
    }

    table tr.logo img {
        width: 20%;
        margin: auto;
    }

    table tr.logo .logo-title {
        text-align: center;
    }

    table tr.logo .logo-title p:first-child {
        font-size: 24px;
        line-height: 36px;
        font-weight: 600; 
        color: #000;
    }

    table tr.logo .logo-title p:last-child {
        font-size: 12px;
        line-height: 18px;
        font-weight: 500;
        color: #000;
    }

    table tr td.contact p {
        font-size: 12px;
        line-height: 18px;
        font-weight: 600;
        color: #000;
        align-items: center;
        display: flex; 
        margin-left: 42%;
        gap: 10px;
        margin-bottom: 10px;
    }
    
    table .blue-bg {
        padding-top: 40px;
    }

    table .blue-bg div {
        background: #183891;
    }

    table .blue-bg div img {
        height: 163px;
        width: 100%;
        object-fit: cover;
    }

    table .pdf-footer div {
        margin-top: 90px;
        padding-left: 30px;
        display: flex;
        justify-content: space-between;
    }

    table .pdf-footer div td {
        font-size: 10px;
        line-height: 15px;
        font-weight: 500;
        color: #000;
    }

    table .pdf-footer div td p {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-right: 25px;
        font-size: 10px;
        font-weight: 500;
        color: #000;
    }

    table .pdf-footer div td p {
        font-size: 11px;
    }



</style>

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