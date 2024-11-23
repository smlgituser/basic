// Invoice.tsx

import React from "react";
import { jsPDF } from "jspdf";

export interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface InvoiceData {
  invoiceNumber: string;
  date: string;
  dueDate: string;
  items: InvoiceItem[];
}

interface InvoiceProps {
  invoiceData: InvoiceData; // Define the prop type
}

const ReportTemplate: React.FC<InvoiceProps> = ({ invoiceData }) => {
  // Function to generate the PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    // Adding title
    doc.setFont("poppins", "bold");
    doc.setFontSize(12);
    doc.text("Invoice", 20, 20);

    // Adding company name and address
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Company Name", 20, 30);
    doc.text("123 Company Address, City, Country", 20, 35);
    doc.text("Email: company@domain.com", 20, 40);
    doc.text("Phone: +123456789", 20, 45);

    // Invoice info
    doc.text(`Invoice #: ${invoiceData.invoiceNumber}`, 140, 30);
    doc.text(`Date: ${invoiceData.date}`, 140, 35);
    doc.text(`Due Date: ${invoiceData.dueDate}`, 140, 40);

    // Line separator
    doc.setLineWidth(0.5);
    doc.line(20, 50, 195, 50);

    // Table headers
    doc.text("Description", 20, 60);
    doc.text("Quantity", 120, 60);
    doc.text("Unit Price", 150, 60);
    doc.text("Total", 180, 60);

    // Table content
    let y = 70;
    invoiceData.items.forEach((item) => {
      doc.text(item.description, 20, y);
      doc.text(item.quantity.toString(), 120, y);
      doc.text(`$${item.unitPrice.toFixed(2)}`, 150, y);
      doc.text(`$${item.total.toFixed(2)}`, 180, y);
      y += 10;
    });

    // Line separator after table
    doc.line(20, y, 195, y);

    // Total amount section
    const totalAmount = invoiceData.items.reduce(
      (acc, item) => acc + item.total,
      0
    );
    doc.text(`Total: $${totalAmount.toFixed(2)}`, 150, y + 10);

    // Save the PDF
    doc.save("invoice.pdf");
  };

  return (
    <div className="p-8 bg-white max-w-4xl mx-auto border-2 border-black">
      <div className="mt-8 text-center">
        <button
          onClick={generatePDF}
          className="px-6 py-2 bg-blue-500 text-white rounded-md"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ReportTemplate;
