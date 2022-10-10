import React from "react";
import SearchBar from "../Components/SearchBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Search({setSearchResults}){

    return (
        <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}><SearchBar setSearchResults={setSearchResults} /></Col>
      </Row>
    </Container>
        
    );
}

export default Search;