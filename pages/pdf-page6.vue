<template>
    <div style="width: 595px; height: 842px;background-color: #fff;margin: auto;margin-top:3%;padding-left: 3%;">
        <table style="width: 100%;">
            <tbody>
                <tr>
                    <td colspan="2" style="padding-top: 30px;padding-bottom: 35px;">
                        <img style="width: 30%;" src="images/pdf-logo.png" alt="careconnect logo" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <h1 style="font-size: 20px;line-height: 30px;font-weight: 600;color: #000;padding-left: 15px;">Quote</h1>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding-right: 60px;padding-top: 10px;padding-left: 15px;">
                        <h2 style="font-size: 16px;line-height: 24px;font-weight: 600;color: #fff;padding: 10px 12px;background-color: #183891">Service</h2>
                    </td>
                </tr>
               <tr>
                    <td>
                        <table style="width: 90%;padding-left: 15px;">
                            <thead>
                                <tr>
                                    <th>
                                        <p style="font-size: 10px;line-height: 17px;font-weight: 500;color: #CACACA;text-align: left;">Service</p>
                                    </th>
                                    <th>
                                        <p style="font-size: 10px;line-height: 17px;font-weight: 500;color: #CACACA;text-align: left;">Rate/Hr.</p>
                                    </th>
                                    <th>
                                        <p style="font-size: 10px;line-height: 17px;font-weight: 500;color: #CACACA;text-align: left;">Days</p>
                                    </th>
                                    <th>
                                        <p style="font-size: 10px;line-height: 17px;font-weight: 500;color: #CACACA;text-align: left;">Total Hours</p>
                                    </th>
                                    <th>
                                        <p style="font-size: 10px;line-height: 17px;font-weight: 500;color: #CACACA;text-align: left;">Amount</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="padding-right: 10px;">
                                        <p style="font-size: 12px;line-height: 14px;font-weight: 600;color: #000;">Home Support Services</p>
                                        <p style="font-size: 12px;line-height: 14px;font-weight: 600;color: #000;">HST (13%)</p>
                                    </td>
                                    <td style="padding-right: 10px;">
                                        <p style="font-size: 12px;line-height: 14px;font-weight: 600;color: #000;">$50</p>
                                    </td>
                                    <td style="padding-right: 10px;">
                                        <p style="font-size: 12px;line-height: 14px;font-weight: 600;color: #000;">Oct. 5 - Oct. 9 2022</p>
                                        <p style="font-size: 12px;line-height: 14px;font-weight: 600;color: #000;">4 days</p>
                                    </td>
                                    <td style="padding-right: 10px;">
                                        <p style="font-size: 12px;line-height: 14px;font-weight: 600;color: #000;">9-10/ Day</p>
                                        <p style="font-size: 12px;line-height: 14px;font-weight: 600;color: #000;">4 hours</p>
                                    </td>
                                    <td>
                                        <p style="font-size: 12px;line-height: 14px;font-weight: 600;color: #000;">$800</p>
                                        <p style="font-size: 12px;line-height: 14px;font-weight: 600;color: #000;">$104</p>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </td>
               </tr>
               <tr>
                    <td colspan="2" style="padding-right: 60px;padding-top: 30px;padding-bottom: 10px;padding-left: 15px;">
                        <h2 style="font-size: 16px;line-height: 24px;font-weight: 600;color: #fff;padding: 10px 12px;background-color: #183891">Total</h2>
                    </td>
                </tr>
                <tr style="display: flex; margin-right: 60px;padding-left: 15px;">
                    <td style="width: 50%;">
                        <p style="font-size: 12px;line-height: 18px;font-weight: 600;color: #000;">Total Service Fee</p>
                    </td>
                    <td style="width: 50%;text-align: end;">
                        <p style="font-size: 12px;line-height: 18px;font-weight: 600;color: #000;">$904.00</p>
                    </td>
                </tr>
            
                
                <tr style="margin-top: 445px;display: flex;">
                    <td style="width: 50%">
                        <p style="font-size: 10px;line-height: 15px;font-weight: 500;color: #000;">www.ucarecon.ca</p>
                    </td>
                    <td style="width: 50%;text-align: end; padding-right: 30px;">
                        <p style="font-size: 10px;line-height: 15px;font-weight: 500;color: #CACACA;">Page 6</p>
                    </td>
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