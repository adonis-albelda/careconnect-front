<template>
    <div class="pdf-wrapper">
        <table>
            <tbody>
                <tr>
                    <td colspan="2" class="logo">
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
                        <h2>Personal Care Services</h2>
                    </td>
                </tr>
               <tr>
                    <td>
                        <p class="description">Personal care includes assistance with the private activities of daily living such as :</p>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Dressing</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Bathing</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Grooming</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Mobility</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Toileting</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Continence assistance</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Medication Reminders</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Alzheimer & Dementia support</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Respite Care</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Overnight Care</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <p class="description">Trained and certified Personel Support Workers provide all personal support services.</p>
                    </td>
               </tr>


               <tr>
                    <td colspan="2" class="sub-title">
                        <h2>Complex Care Services</h2>
                    </td>
                </tr>
               <tr>
                    <td>
                        <p class="description">Complex care refers to services that must be performed by a regulated health professional such as a Registered Practical Nurse.</p>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Medication administration</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Vital signs monitoring</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Wound care</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Catheter care</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Foot care</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Ostomy care</li>
                    </td>
               </tr>
               <tr>
                    <td>
                        <li>Palliative care</li>
                    </td>
               </tr>
               
            
                
                <tr class="pdf-footer">
                    <td>
                        <p>www.ucarecon.ca</p>
                    </td>
                    <td>
                        <p>Page 5</p>
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

    table td.logo {
        padding-top: 30px;
        padding-bottom: 35px;
    }

    table td.logo img {
        width: 30%;
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

    table td li {
        font-size: 10px;
        line-height: 15px;
        font-weight: 500;
        color: #000;
        padding-left: 25px;
    }

    table tr.pdf-footer {
        margin-top: 145px;
        display: flex;
    }

    table tr.pdf-footer td {
        width: 50%;
    }

    table tr.pdf-footer td:first-child p{
        font-size: 10px;
        line-height: 15px;
        font-weight: 500;
        color: #000;
    }

    table tr.pdf-footer td:last-child {
        text-align: end; 
        padding-right: 30px;
    }

    table tr.pdf-footer td:last-child p {
        font-size: 10px;
        line-height: 15px;
        font-weight: 500;
        color: #CACACA;
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