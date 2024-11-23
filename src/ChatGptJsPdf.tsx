import React from "react";
import jsPDF from "jspdf";

interface InvoiceData {
  invoiceNo: string;
  date: string;
  customerName: string;
  customerAddress: string;
  custId: string;
  gstin: string;
  panNo: string;
  telephone: string;
  city: string;
  pinCode: string;
  modelDesc: string;
  modelDetails: string;
  color: string;
  engineNo: string;
  chassisNo: string;
  amount: number;
  igstAmount: number;
  igstPercentage: number;
  tcsAmount: number;
  totalAmount: number;
  materialCode: string;
  branchAddress: string;
}

const ChatGptJsPdf: React.FC = () => {
  const generatePDF = () => {
    const invoiceData: InvoiceData = {
      invoiceNo: "V120412425/87",
      date: "14/11/2024",
      customerName: "GLA UNIVERSITY",
      customerAddress:
        "U/C SHRI JAGANNATH PRASAD GANESHI LAL\nBAZAZ CHARITABLE TRUST SAMITI\n17 KM STONE, MATHURA DELHI HIGHWAY\nPO-CHAUMUHAN, MATHURA - 281401",
      custId: "107962",
      gstin: "AABTS1465Q",
      panNo: "AABTS1465Q",
      telephone: "9917088874",
      city: "MATHURA",
      pinCode: "281406",
      modelDesc: '"S7 5100 SCHOOL BUS" 52+1 SEATER',
      modelDetails:
        "S7 SKL BUS BSVI (52+1)(3X2) AIR BRAKE,FDSS,RPAS,FAPS,GREENFUEL,ABS,OBD2,PS,WB5100MM",
      color: "GOLDEN YELLOW",
      engineNo: "SLT6GL308466",
      chassisNo: "MBUZT54XGL0317721",
      amount: 1894531.25,
      igstAmount: 530468.75,
      igstPercentage: 28,
      tcsAmount: 24250.0,
      totalAmount: 2449250.0,
      materialCode: "S3E51APTMID5\n094GYLG0",
      branchAddress: "",
    };

    // Create new PDF document
    const doc = new jsPDF({
      unit: "mm",
      format: "a4",
    });

    // Header section
    doc.setFontSize(8);
    doc.text("ORIGINAL FOR RECEIPIENT", 10, 10);

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(
      "INDERSONS MOTORS PVT. LTD.",
      doc.internal.pageSize.width / 2,
      20,
      { align: "center" }
    );

    doc.setFontSize(10);
    doc.text(
      "17 C, NEW COLONY NEW DELHI",
      doc.internal.pageSize.width / 2,
      25,
      { align: "center" }
    );
    doc.text("GSTN No:07AAACI0697L1ZA", doc.internal.pageSize.width / 2, 30, {
      align: "center",
    });

    // Small text below GSTIN
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(
      "(UNDER SECTION 31/34 OF CGST ACT, 2017 READ WITH RULE 46/53 OF CGST RULES, 2017)",
      doc.internal.pageSize.width / 2,
      35,
      { align: "center" }
    );

    // TAX INVOICE title
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("TAX INVOICE", doc.internal.pageSize.width / 2, 42, {
      align: "center",
    });

    // Invoice details
    doc.setFontSize(9);
    doc.text(`Invoice No : ${invoiceData.invoiceNo}`, 15, 50);
    doc.text(`Date : ${invoiceData.date}`, 130, 50);

    // Draw boxes for billing and shipping
    const boxY = 55;
    const boxHeight = 45;
    doc.rect(15, boxY, 85, boxHeight); // Billing box
    doc.rect(110, boxY, 85, boxHeight); // Shipping box

    // Box titles
    doc.setFont("helvetica", "bold");
    doc.text("Details of Recipient (Billed to)", 17, boxY + 5);
    doc.text("Details of Consignee (Shipped to)", 112, boxY + 5);

    // Add content to boxes
    doc.setFont("helvetica", "normal");
    const addressLines = invoiceData.customerAddress.split("\n");
    let y = boxY + 12;
    addressLines.forEach((line) => {
      doc.text(line, 17, y);
      doc.text(line, 112, y);
      y += 6;
    });

    // Customer details section
    y = boxY + boxHeight + 10;
    doc.text(`Cust Id : ${invoiceData.custId}`, 15, y);
    doc.text(
      `City : ${invoiceData.city} ,Pin-${invoiceData.pinCode}`,
      15,
      y + 6
    );
    doc.text(`GSTIN No : ${invoiceData.gstin}`, 15, y + 12);
    doc.text(`Telephone No : ${invoiceData.telephone}`, 15, y + 18);
    doc.text(
      `City : ${invoiceData.city} ,Pin Code-${invoiceData.pinCode}`,
      15,
      y + 24
    );
    doc.text(
      `Pan No (if TCS is Applicable) : ${invoiceData.panNo}`,
      15,
      y + 30
    );

    // Right side details
    doc.text(
      `City : ${invoiceData.city} ,Pin-${invoiceData.pinCode}`,
      110,
      y + 6
    );
    doc.text(`GSTIN No : ${invoiceData.gstin}`, 110, y + 12);
    doc.text(`Telephone No : ${invoiceData.telephone}`, 110, y + 18);

    // Finance details
    doc.text("Hypothecated to : CASH/SELF FINANCED", 15, y + 36);
    doc.text("Branch Address :", 15, y + 42);

    // Vehicle details
    y += 48;
    doc.setFont("helvetica", "bold");
    doc.text("Model Descr :", 15, y);
    doc.setFont("helvetica", "normal");
    doc.text(invoiceData.modelDesc, 45, y);

    doc.setFont("helvetica", "bold");
    doc.text("Model : ", 15, y + 6);
    doc.setFont("helvetica", "normal");
    doc.text(invoiceData.modelDetails, 45, y + 6, { maxWidth: 150 });

    doc.setFont("helvetica", "bold");
    doc.text("Colour : ", 15, y + 12);
    doc.setFont("helvetica", "normal");
    doc.text(invoiceData.color, 45, y + 12);

    // Create table
    y += 20;
    const tableTop = y;
    const tableHeaders = [
      "S.No",
      "Description of Goods",
      "HSN Code (GST)",
      "Quantity",
      "UOM",
      "Unit Price (INR)",
      "Total (INR)",
    ];
    const columnWidths = [15, 60, 25, 20, 15, 25, 25];

    // Draw table outline
    doc.rect(15, tableTop, 180, 40);

    // Draw table headers
    let xPos = 15;
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    tableHeaders.forEach((header, index) => {
      doc.text(header, xPos + 2, tableTop + 5);
      xPos += columnWidths[index];
      // Draw vertical lines
      if (index < tableHeaders.length - 1) {
        doc.line(xPos, tableTop, xPos, tableTop + 40);
      }
    });

    // Draw header separator line
    doc.line(15, tableTop + 7, 195, tableTop + 7);

    // Add table data
    doc.setFont("helvetica", "normal");
    xPos = 15;
    const tableData = [
      "1",
      invoiceData.modelDesc + "\n" + invoiceData.materialCode,
      "87021029",
      "1",
      "EA",
      invoiceData.amount.toFixed(2),
      invoiceData.amount.toFixed(2),
    ];

    tableData.forEach((data, index) => {
      if (index === 1) {
        const lines = data.split("\n");
        lines.forEach((line, lineIndex) => {
          doc.text(line, xPos + 2, tableTop + 12 + lineIndex * 4);
        });
      } else {
        doc.text(data, xPos + 2, tableTop + 12);
      }
      xPos += columnWidths[index];
    });

    // Amount calculations
    y = tableTop + 45;
    doc.text(`Sub Total : ${invoiceData.amount.toFixed(2)}`, 140, y);
    doc.text(
      `IGST @${invoiceData.igstPercentage}% : ${invoiceData.igstAmount.toFixed(
        2
      )}`,
      140,
      y + 6
    );
    doc.text(`TCS @1% : ${invoiceData.tcsAmount.toFixed(2)}`, 140, y + 12);
    doc.setFont("helvetica", "bold");
    doc.text(
      `Total Invoice Value (in figures) : ${invoiceData.totalAmount.toFixed(
        2
      )}`,
      140,
      y + 18
    );

    // Amount in words
    doc.text("Amount of Tax Subject to Reverse Charge.", 15, y + 18);
    doc.text("Total Invoice Value (in words) :", 15, y + 24);
    doc.setFont("helvetica", "normal");
    doc.text(
      "RUPEES TWENTY-FOUR LAKHS FORTY-NINE THOUSAND TWO HUNDRED FIFTY ONLY",
      15,
      y + 30
    );

    // Vehicle numbers
    y += 36;
    doc.text(`Engine No : ${invoiceData.engineNo}`, 15, y);
    doc.text(`Chassis No : ${invoiceData.chassisNo}`, 100, y);

    // Terms and conditions
    y += 10;
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.text("Terms & Condition of Sale", 15, y);
    doc.setFont("helvetica", "normal");
    doc.text(
      "We are hereby certify that our registration GSTIN No certificate",
      15,
      y + 5
    );
    doc.text(
      "mentioned are in force on the date on which the sale of the goods",
      15,
      y + 10
    );
    doc.text(
      "specified in this bill / cash memorandum is made by us.",
      15,
      y + 15
    );

    // Signature lines
    y += 20;
    doc.line(15, y, 60, y);
    doc.text("Customer Signature", 15, y + 5);
    doc.text("Electronic Reference No :", 15, y + 10);

    doc.line(140, y, 185, y);
    doc.text("Signature :", 140, y - 10);
    doc.text("Name of Authorised Signatory :", 140, y - 5);
    doc.text("Designation Status :", 140, y + 5);

    // Company name at bottom
    doc.setFont("helvetica", "bold");
    doc.text(
      "INDERSONS MOTORS PVT. LTD.",
      doc.internal.pageSize.width / 2,
      y + 15,
      { align: "center" }
    );

    // Save the PDF
    doc.save("exact_vehicle_invoice.pdf");
  };

  return (
    <div className="p-4">
      <button
        onClick={generatePDF}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Generate Complete Invoice PDF
      </button>
    </div>
  );
};

export default ChatGptJsPdf;
