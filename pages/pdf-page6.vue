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
                        <h1>Quote</h1>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="sub-title">
                        <h2>Service</h2>
                    </td>
                </tr>
               <tr>
                    <td>
                        <table class="table-title">
                            <thead>
                                <tr>
                                    <th>
                                        <p>Service</p>
                                    </th>
                                    <th>
                                        <p>Rate/Hr.</p>
                                    </th>
                                    <th>
                                        <p>Days</p>
                                    </th>
                                    <th>
                                        <p>Total Hours</p>
                                    </th>
                                    <th>
                                        <p>Amount</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Home Support Services</p>
                                        <p>HST (13%)</p>
                                    </td>
                                    <td>
                                        <p>$50</p>
                                    </td>
                                    <td>
                                        <p>Oct. 5 - Oct. 9 2022</p>
                                        <p>4 days</p>
                                    </td>
                                    <td>
                                        <p>9-10/ Day</p>
                                        <p>4 hours</p>
                                    </td>
                                    <td>
                                        <p>$800</p>
                                        <p>$104</p>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </td>
               </tr>
               <tr>
                    <td colspan="2" class="sub-title">
                        <h2>Total</h2>
                    </td>
                </tr>
                <tr class="total">
                    <td>
                        <p>Total Service Fee</p>
                    </td>
                    <td>
                        <p>$904.00</p>
                    </td>
                </tr>
            
                
                <tr class="pdf-footer">
                    <td>
                        <p>www.ucarecon.ca</p>
                    </td>
                    <td>
                        <p>Page 6</p>
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
        padding-right: 60px;
        padding-top: 10px;
        padding-left: 15px;
    }

    table td.sub-title h2 {
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
        color: #fff;
        padding: 10px 12px;
        background-color: #183891;
    }

    table .table-title {
        width: 90%;
        padding-left: 15px;
    }

    table .table-title thead tr th p {
        font-size: 10px;
        line-height: 17px;
        font-weight: 500;
        color: #CACACA;
        text-align: left;
    }

    table .table-title tbody td {
        padding-right: 10px;
    }

    table .table-title tbody td:last-child {
        padding-right: 0;
    }

    table .table-title tbody td p {
        font-size: 12px;
        line-height: 14px;
        font-weight: 600;
        color: #000;
    }

    table tr.total {
        display: flex; 
        margin-right: 60px;
        padding-left: 15px;
    }

    table tr.total td {
        width: 50%;
    }

    table tr.total td:first-child p {
        color: #000;
    }

    table tr.total td:last-child {
        text-align: end;
    }

    table tr.total td:last-child p {
        color: #000;
    }

    table tr.total td p {
        font-size: 12px;
        line-height: 18px;
        font-weight: 600;
        color: #000;
    }

    .pdf-footer {
        margin-top: 445px;
        display: flex;
    }

    .pdf-footer td {
        width: 50%;
    }

    .pdf-footer td p {
        font-size: 10px;
        line-height: 15px;
        font-weight: 500;
    }

    .pdf-footer td:first-child p {
        color: #000;
    }

    .pdf-footer td:last-child {
        text-align: end; 
        padding-right: 30px;
    }
    
    .pdf-footer td:last-child p {
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