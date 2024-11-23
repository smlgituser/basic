import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    // border: "2px solid black",
    marginVertical: "14px",
  },
  TopHeadingView: {
    width: "100%",
    textAlign: "center",
    padding: "6px",
    fontSize: "14px",
    fontWeight: "bold",
  },
  gridCol2: {
    display: "flex",
    flexDirection: "row",
    margin: "0px 20px",
  },
});

// Create Document Component
const ReactPdf = () => (
  <PDFViewer style={{ width: "100%", height: "100vh" }}>
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Heading SML Isuzu */}
        <View style={styles.TopHeadingView}>
          <Text style={{ fontWeight: "bold" }}>SML ISUZU SAMPLE REPORT</Text>
        </View>

        <View style={styles.gridCol2}>
          <View
            style={{
              border: "1px solid black",
              width: "50%",
              fontSize: "8px",
              padding: "5px",
            }}
          >
            <Text>
              Model no. - <Text>10750101801</Text>{" "}
            </Text>
          </View>
          <View
            style={{
              border: "1px solid black",
              width: "50%",
              fontSize: "8px",
              padding: "5px",
            }}
          >
            <Text>
              Order no. - <Text>10750101801</Text>{" "}
            </Text>
          </View>
        </View>
        <View style={styles.gridCol2}>
          <View
            style={{
              border: "1px solid black",
              width: "50%",
              fontSize: "8px",
              padding: "5px",
            }}
          >
            <Text>
              Model no. - <Text>10750101801</Text>{" "}
            </Text>
          </View>
          <View
            style={{
              border: "1px solid black",
              width: "50%",
              fontSize: "8px",
              padding: "5px",
            }}
          >
            <Text>
              Order no. - <Text>10750101801</Text>{" "}
            </Text>
          </View>
        </View>
        <View style={styles.gridCol2}>
          <View
            style={{
              border: "1px solid black",
              width: "50%",
              fontSize: "8px",
              padding: "5px",
            }}
          >
            <Text>
              Model no. - <Text>10750101801</Text>{" "}
            </Text>
          </View>
          <View
            style={{
              border: "1px solid black",
              width: "50%",
              fontSize: "8px",
              padding: "5px",
            }}
          >
            <Text>
              Order no. - <Text>10750101801</Text>{" "}
            </Text>
          </View>
        </View>
        <View style={styles.gridCol2}>
          <View
            style={{
              border: "1px solid black",
              width: "50%",
              fontSize: "8px",
              padding: "5px",
            }}
          >
            <Text>
              Model no. - <Text>10750101801</Text>{" "}
            </Text>
          </View>
          <View
            style={{
              border: "1px solid black",
              width: "50%",
              fontSize: "8px",
              padding: "5px",
            }}
          >
            <Text>
              Order no. - <Text>10750101801</Text>{" "}
            </Text>
          </View>
        </View>
        <View style={styles.gridCol2}>
          <View
            style={{
              border: "1px solid black",
              width: "50%",
              fontSize: "8px",
              padding: "5px",
            }}
          >
            <Text>
              Model no. - <Text>10750101801</Text>{" "}
            </Text>
          </View>
          <View
            style={{
              border: "1px solid black",
              width: "50%",
              fontSize: "8px",
              padding: "5px",
            }}
          >
            <Text>
              Order no. - <Text>10750101801</Text>{" "}
            </Text>
          </View>
        </View>
        <View style={styles.gridCol2}>
          <View
            style={{
              border: "1px solid black",
              width: "50%",
              fontSize: "8px",
              padding: "5px",
            }}
          >
            <Text>
              Model no. - <Text>10750101801</Text>{" "}
            </Text>
          </View>
          <View
            style={{
              border: "1px solid black",
              width: "50%",
              fontSize: "8px",
              padding: "5px",
              height: "100px",
            }}
          >
            <Text style={{ padding: "2px" }}>
              Order no. - <Text>10750101801</Text>{" "}
            </Text>
            <Text style={{ padding: "2px" }}>
              Material no. - <Text>10750101801</Text>{" "}
            </Text>
            <Text style={{ padding: "2px" }}>
              Order no. - <Text>10750101801</Text>{" "}
            </Text>
            <Text style={{ padding: "2px" }}>
              Order no. - <Text>10750101801</Text>{" "}
            </Text>
            <Text style={{ padding: "2px" }}>
              Order no. - <Text>10750101801</Text>{" "}
            </Text>
          </View>
        </View>
        <View style={styles.gridCol2}>
          <View
            style={{
              border: "1px solid black",
              width: "50%",
              fontSize: "8px",
              padding: "5px",
            }}
          >
            <Text>
              Model no. - <Text>10750101801</Text>{" "}
            </Text>
          </View>
          <View
            style={{
              border: "1px solid black",
              width: "50%",
              fontSize: "8px",
              padding: "5px",
            }}
          >
            <Text>
              Order no. - <Text>10750101801</Text>{" "}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default ReactPdf;
