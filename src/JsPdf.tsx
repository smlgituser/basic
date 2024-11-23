import ReportTemplate from "./ReportTemplate";

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
const invoiceData: InvoiceData = {
  invoiceNumber: "INV-12345",
  date: "2024-11-22",
  dueDate: "2024-12-22",
  items: [
    {
      description: "Laptop",
      quantity: 1,
      unitPrice: 799.99,
      total: 799.99,
    },
    {
      description: "Wireless Mouse",
      quantity: 2,
      unitPrice: 25.5,
      total: 51.0,
    },
    {
      description: "Keyboard",
      quantity: 1,
      unitPrice: 45.0,
      total: 45.0,
    },
    {
      description: "Shipping Fee",
      quantity: 1,
      unitPrice: 15.0,
      total: 15.0,
    },
  ],
};

const App: React.FC = () => {
  return (
    <div className="App">
      <ReportTemplate invoiceData={invoiceData} />
    </div>
  );
};

export default App;
