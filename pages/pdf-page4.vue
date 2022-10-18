<template>
    <div class="pdf-wrapper">
        <table>
            <tbody>
                <tr>
                    <td colspan="2">
                        <img src="images/pdf-logo.png" alt="careconnect logo" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="title">
                        <h1>Services</h1>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="sub-title">
                        <h2>Home Support Services</h2>
                    </td>
                </tr>
               <tr>
                    <td>
                        <p class="description">Home support services include assistance with day-to-day activities such as :</p>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Light housekeeping & Laundry</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Meal Preperation & Planning</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Companionship and Community outings</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Light yard work</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Grocery shopping</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Errands</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Accompaniment to doctor or other health care appointments</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Pet care</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Incidental Transportation</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Home Safety</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Sorting mail</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Cleaning cupboards</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Performing regular fridge cleaning to ensure food is fresh</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Coordination of home and yard repair or maintenance services</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Coordination for installation of in-home assistance devices</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Coordination of services and referrals to other community agencies if required</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <p class="description">We offer the option of Live-in caregivers for short or long term placements.</p>
                    </td>
               </tr>
            
                
                <tr class="pdf-footer">
                    <td>
                        <p>www.ucarecon.ca</p>
                    </td>
                    <td>
                        <p>Page 4</p>
                    </td>
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

    table td img {
        width: 30%;
        margin-bottom: 30px;
    }

    table td.title h1 {
        font-size: 20px;
        line-height: 30px;
        font-weight: 600;
        color: #000;
        padding-left: 15px;
    }

    table td.sub-title {
        padding: 15px 60px 10px 15px;
    }

    table td.sub-title h2 {
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
        color: #183891;
    }

    table .description {
        font-size: 10px;
        line-height: 15px;
        font-weight: 600;
        color: #000;
        margin-bottom: 8px;
        padding-left: 15px;
    }
    
    table tr td li {
        font-size: 10px;
        line-height: 15px;
        font-weight: 600;
        color: #000;
        margin-bottom: 8px;
        padding-left: 15px;
    }

    .pdf-footer {
        margin-top: 160px;
        display: flex;
    }

    .pdf-footer td {
        width:50%
    }

    .pdf-footer td:first-child {
        color: #000;
    }

    .pdf-footer td:last-child {
        text-align: end; 
        padding-right: 30px;
        color: #CACACA;
    }

    

    .pdf-footer td p {
        font-size: 10px;
        line-height: 15px;
        font-weight: 500;
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