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
                        <h1>Staff</h1>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="sub-title">
                        <h2>Mrs. B. Elmido - Owner</h2>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p><span></span>Mrs. Elmido will be responsible for the management of <span>CCHAHS</span> and is dedicating 100% of her time to the business. Resposibilities include office management, sales and marketing, payroll general accounting, scheduling, employee, hiring, firing, and background checks, client assesments and checks, writing customer reports, and presenting CCHAHS sevices to local health related facilities and senior health care oraganizations.</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p>Mrs. B. Elmido has a natural aptitude for business, inheret leadership abilities, strong interpersonal skills, and a passion for serving customers.</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p>Mrs. Elmido has resposibility for conducting customer needs assessments and maintaining customer satisfaction quality conformance.</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="sub-title">
                        <h2>Ms. Christina Rojas / Technical Advisor</h2>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p>Ms. C. Rojas is envolved in the business on a fulltime basis intially and assisting in office administration including client assessments and checks, payroll, general accounting, scheduling, employee background checks, and writing customer reports.</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p>Ms. C. Rojas will join the business full-time in the first quarter of 2022</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p>Ms. C. Rojas has been in the medical profession as a Health Care Aide since 2010. She brings experience and expertise in caring for seniors.</p>
                    </td>
                </tr>
                
                <tr class="pdf-footer">
                    <td>
                        <p>www.ucarecon.ca</p>
                    </td>
                    <td>
                        <p>Page 3</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
    .pdf-wrapper {
        width: 794px;
        height: 1123px;
        padding-top: 4%;
        margin: 0 auto;
        font-family: 'Poppins', sans-serif;
        position: relative;
    }

    table {
        width: 100%;
    }

    table td {
        padding: 0px 60px 10px 15px;
    }

    table td img {
        width: 30%;
    }

    table td p {
        font-size: 10px;line-height: 15px;font-weight: 500;color: #000;
    } 

    table td.title {
        padding-top: 30px;
        padding-bottom: 35px;
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

    .pdf-footer {
        margin-top: 265px;
        display: flex;
    }

    table .pdf-footer td {
        width: 50%;
    }

    table .pdf-footer td:first-child p {
        color: #000;
    }

    table .pdf-footer td:last-child {
        text-align: end; 
        padding-right: 30px;
    }

    table .pdf-footer td:last-child p {
        color: #CACACA;
    }

    table .pdf-footer td p {
        font-size: 10px;
        line-height: 15px;
        font-weight: 500;
    }

    table .pdf-footer td p span {
        color: #183891;
        font-weight: 700;
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