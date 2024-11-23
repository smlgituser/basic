import jsPDF from "jspdf";
import logo from "/logo.jpg";

const MyJsPdf = () => {
  const generatePdf = () => {
    // 210 x 297 (W x H)
    // x1, y1 ,x2, y2

    const doc = new jsPDF("p", "mm", "a4");

    let yforText = 12;
    let yforHorizontalBorder = 36;
    const pageMiddle = 198 / 2;

    // Border for document
    doc.setLineWidth(0.5);
    doc.line(6, 6, 204, 6); // top
    doc.line(6, 290, 204, 290); // bottom

    doc.line(6, 6, 6, 290); // left
    doc.line(204, 290, 204, 6); // right

    // Company Name and Logo
    doc.setFontSize(12);
    doc.text("INDERSONS MOTORS PVT. LTD.", pageMiddle, yforText, {
      align: "center",
    });
    doc.text("17 C, NEW COLONY NEW DELHI", pageMiddle, (yforText += 5), {
      align: "center",
    });
    doc.text("GSTN No:07AAACI0697L1ZA", pageMiddle, (yforText += 5), {
      align: "center",
    });

    // Add Company Logo
    doc.addImage(logo, "JPEG", pageMiddle + 60, 8, yforText, 12);

    // Subheading
    doc.setFontSize(8);
    doc.text(
      "UNDER SECTION 31/34 OF CGST ACT, 2017 READ WITH RULE 46/53 OF CGST RULES, 2017",
      pageMiddle,
      (yforText += 6),
      {
        align: "center",
      }
    );

    //Document heading (TAX INVOICE)
    doc.setFontSize(10).setFont("", "bold");
    doc.text("TAX INVOICE", pageMiddle, (yforText += 6), {
      align: "center",
    });

    // Bottom border
    doc.setLineWidth(0.5);
    doc.line(6, yforHorizontalBorder, 204, yforHorizontalBorder);

    // Invoice Number and Date
    doc.setFontSize(10).setFont("", "normal");
    doc.text("Invoice No. ", 10, yforText + 6);
    doc.text("V120412425/87", 10 + 20, yforText + 6);

    // Sparation Line
    doc.line(
      pageMiddle,
      yforHorizontalBorder,
      pageMiddle,
      yforHorizontalBorder + 70
    );

    // Date
    doc.text("Date. ", pageMiddle + 10, yforText + 6);
    doc.text("14/11/2024", pageMiddle + 20, yforText + 6);

    // Increase text vertical
    yforText += 8;

    // Border line
    doc.line(6, yforHorizontalBorder + 7, 204, yforHorizontalBorder + 7);

    // Billed to
    doc.text("Details of Recipient (Billed to)", pageMiddle / 2, yforText + 6, {
      align: "center",
    });

    // Sparation Line
    doc.line(
      pageMiddle,
      yforHorizontalBorder,
      pageMiddle,
      yforHorizontalBorder + 7
    );

    // Shipped to
    doc.text(
      "Details of Consignee (Shipped to)",
      pageMiddle + pageMiddle / 2,
      yforText + 6,
      {
        align: "center",
      }
    );

    // Update horizontal border
    yforHorizontalBorder += 7;

    // BORDER BOTTOM
    doc.line(6, yforHorizontalBorder + 7, 204, yforHorizontalBorder + 7);

    // BILLED TO INNER FIELDS

    doc.text("Name: ", 10, yforText + 15);
    var splitTitle = doc.splitTextToSize(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, itaque!",
      pageMiddle / 2 + 20
    );
    doc.text(splitTitle, 24, yforText + 15);

    doc.text("Cust Id: ", 10, yforText + 25);
    doc.text("1684684687", 24, yforText + 25);

    doc.text("Address: ", 10, yforText + 30);
    var splitTitle = doc.splitTextToSize(
      "U/C SHRI JAGANNATH PRASAD GANESHI LAL BAZAZ CHARITABLE TRUST SAMITI  17 KM STONE, MATHURA DELHI HIGHWAY PO-CHAUMUHAN, ATHURA - 281401",
      pageMiddle / 2 + 20
    );
    doc.text(splitTitle, 24, yforText + 30);

    doc.text("Telephone: ", 10, yforText + 51);
    doc.text("9875548745", 28, yforText + 51);

    doc.text("GST No: ", 10, yforText + 56);
    doc.text("XXXXXXXXXXXXX", 24, yforText + 56);

    // SHIPPED TO INNER FIELDS

    doc.text("Name: ", pageMiddle + 10, yforText + 15);
    var splitTitle = doc.splitTextToSize(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, itaque!",
      pageMiddle / 2 + 20
    );
    doc.text(splitTitle, pageMiddle + 24, yforText + 15);

    doc.text("Cust Id: ", pageMiddle + 10, yforText + 25);
    doc.text("1684684687", pageMiddle + 24, yforText + 25);

    doc.text("Address: ", pageMiddle + 10, yforText + 30);
    var splitTitle = doc.splitTextToSize(
      "U/C SHRI JAGANNATH PRASAD GANESHI LAL BAZAZ CHARITABLE TRUST SAMITI  17 KM STONE, MATHURA DELHI HIGHWAY PO-CHAUMUHAN, ATHURA - 281401",
      pageMiddle / 2 + 20
    );
    doc.text(splitTitle, pageMiddle + 24, yforText + 30);

    doc.text("Telephone: ", pageMiddle + 10, yforText + 51);
    doc.text("9875548745", pageMiddle + 28, yforText + 51);

    doc.text("GST No: ", pageMiddle + 10, yforText + 56);
    doc.text("XXXXXXXXXXXXX", pageMiddle + 24, yforText + 56);

    // UPDATE HORIZONTAL BORDER VALUE
    yforHorizontalBorder += 60;

    // BORDER ABOVE PAN NUMBER
    doc.line(6, yforHorizontalBorder + 3, 204, yforHorizontalBorder + 3);

    // Invoice Number and Date
    doc.setFontSize(10).setFont("", "normal");
    doc.text("Invoice No. ", 10, yforText + 70);
    doc.text("V120412425/87", 10 + 20, yforText + 70);

    // Sparation Line
    doc.line(
      pageMiddle,
      yforHorizontalBorder,
      pageMiddle,
      yforHorizontalBorder + 70
    );

    // Date
    doc.text("Date. ", pageMiddle + 10, yforText + 70);
    doc.text("14/11/2024", pageMiddle + 20, yforText + 70);

    // SAVE DOCUMENT
    doc.save();
  };

  return (
    <div className="flex justify-center items-center p-10">
      <button
        onClick={generatePdf}
        className="p-3 bg-green-500 text-white rounded font-semibold"
      >
        Download PDF
      </button>
    </div>
  );
};

export default MyJsPdf;
