import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
// import LebronStretch from "../photo/lebron_transparent.png";
 
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = ({courseDetails}) => {
    const { id, name, image, details, fee, duration, instructor } = courseDetails;
    console.log(courseDetails)
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed> {name}</Text>
        <Image style={styles.image} src={image} />
        <Text style={styles.text}>
         Course fee: ${fee}
        </Text>
        <Text style={styles.text}>
         Course duration: {duration} weeks
         </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;