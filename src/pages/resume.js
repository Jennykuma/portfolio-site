import React from "react"
import Layout from "../components/layout"

import { Container, Row, Col } from "reactstrap"
import { Document, Page } from "react-pdf"
import resume from "../pdfs/jenny-le-resume.pdf"

const ResumePage = () => (
    <Layout>
        <Container fluid>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Document file={resume}> 
                        <Page pageNumber={1} />
                    </Document>
                </Col>
            </Row>
        </Container>
    </Layout>
)

export default ResumePage