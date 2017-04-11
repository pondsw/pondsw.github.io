<!DOCTYPE html>
<html>
<body>
  <p>
    ข้อที่ 24.ต้องการรู้ว่า แต่ละอสังหามีลูกค้าไปดูจำนวนกี่คน (แสดงทุกอสังหา ถ้าไม่มีคนไปดู ให้แสดงค่า 0)
  </p>
  <br /><br />
  <div class="container" style="width:700px;">
       <h3 align="center">Export HTML Table data to PDF using TCPDF in PHP</h3><br />
       <div class="table-responsive">
            <table class="table table-bordered">
                 <tr>
                      <th width="10%">propertyno</th>
                      <th width="25%">street</th>
                      <th width="25%">city</th>
                      <th width="25%">postcode</th>
                      <th width="10%">type</th>
                      <th width="5%">viewer</th>
                 </tr>
            <?php
            echo fetch_data();
            ?>
            </table>
            <br />
            <form method="post">
                 <input type="submit" name="create_pdf" class="btn btn-danger" value="Create PDF" />
            </form>
       </div>
  </div>
  <br>
<?php
// echo "<table style='border: solid 1px black;'>";
// echo "<tr><th>propertyno</th><th>street</th><th>city</th><th>postcode</th><th>type</th><th>viewer</th></tr>";
//
// class TableRows extends RecursiveIteratorIterator {
//     function __construct($it) {
//         parent::__construct($it, self::LEAVES_ONLY);
//     }
//
//     function current() {
//         return "<td style='width:150px;border:1px solid black;'>" . parent::current(). "</td>";
//     }
//
//     function beginChildren() {
//         echo "<tr>";
//     }
//
//     function endChildren() {
//         echo "</tr>" . "\n";
//     }
// }

  function fetch_data(){
    // $servername = "localhost";
    // $username = "root";
    // $password = "";
    //  $output = ''
    $servername = "188.166.223.106";
    $username = "webtech";
    $password = "P@ssw0rd";
    $dbname = "learningsystem";
    $output = '';

    $user = '5610451337';
    $pwd = '12345';
    try {
      $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      // $sql = "select b.propertyno ,b.street,b.city,b.postcode,b.type,count(a.propertyno) as viewer from viewing a right join  propertyforrent b on a.propertyno = b.propertyno group by b.propertyno order by viewer desc;";
      $sql = "select COUNT(*) as total FROM learningsystem.user where userid = '$user' and pwd = '$pwd';";
    // use exec() because no results are returned
    // $conn->exec($sql);
      $stmt = $conn->prepare($sql);
      $stmt->execute();
      $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);

      foreach ($stmt->fetchAll() as $key => $value){
        // echo $value["propertyno"];
        // $output .= '<tr>
        //                   <td>'.$value["propertyno"].'</td>
        //                   <td>'.$value["street"].'</td>
        //                   <td>'.$value["city"].'</td>
        //                   <td>'.$value["postcode"].'</td>
        //                   <td>'.$value["type"].'</td>
        //                   <td>'.$value["viewer"].'</td>
        //              </tr>
        //                   ';
        $output = $value["total"];

      }


      // echo $stmt->fetchAll();
      // echo gettype ($stmt->fetchAll() );
      // foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
        // echo $v;
      // }
      // while($row = mysqli_fetch_array($result))
      // {
    }
    catch(PDOException $e)
    {
      echo $sql . "<br>" . $e->getMessage();
    }

    $conn = null;
    return $output;
  }

  if(isset($_POST["create_pdf"]))
  {
    // fetch_data();
    // require_once('tcpdf/tcpdf.php');
    //     $obj_pdf = new TCPDF('P', PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
    //     $obj_pdf->SetCreator(PDF_CREATOR);
    //     $obj_pdf->SetTitle("Export HTML Table data to PDF using TCPDF in PHP");
    //     $obj_pdf->SetHeaderData('', '', PDF_HEADER_TITLE, PDF_HEADER_STRING);
    //     $obj_pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
    //     $obj_pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));
    //     $obj_pdf->SetDefaultMonospacedFont('helvetica');
    //     $obj_pdf->SetFooterMargin(PDF_MARGIN_FOOTER);
    //     $obj_pdf->SetMargins(PDF_MARGIN_LEFT, '5', PDF_MARGIN_RIGHT);
    //     $obj_pdf->setPrintHeader(false);
    //     $obj_pdf->setPrintFooter(false);
    //     $obj_pdf->SetAutoPageBreak(TRUE, 10);
    //     $obj_pdf->SetFont('helvetica', '', 12);
    //     $obj_pdf->AddPage();
    //     $content = '';
    //     $content .= '
    //     <h3 align="center">Export HTML Table data to PDF using TCPDF in PHP</h3><br /><br />
    //     <table border="1" cellspacing="0" cellpadding="5">
    //          <tr>
    //               <th width="10%">propertyno</th>
    //               <th width="25%">street</th>
    //               <th width="25%">city</th>
    //               <th width="25%">postcode</th>
    //               <th width="10%">type</th>
    //               <th width="5%">viewer</th>
    //          </tr>
    //     ';
    //     $content .= fetch_data();
    //     $content .= '</table>';
    //     $obj_pdf->writeHTML($content);
    //     $obj_pdf->Output('sample.pdf', 'I');
    echo fetch_data();

  }
?>
</body>
</html>
