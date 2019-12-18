import React, { Component } from "react";
import { Table,Row,Cell } from 'react-bootstrap';
import { render } from "react-dom";

class dataposisi extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        }
      }

    

    componentDidMount () {
        fetch("https://jobs.github.com/positions.json")  
            .then((response) => response.json())            
            .then(responseJson => {
                this.setState({
                    data: responseJson,
                })
            })
            .catch(error => {
                console.log(error);
              }); 
    }

    render() {
        return (
            <div id="wrapper">
                <Table striped bordered hover>
                    
                    {
                        this.state.data.map((data, index) => {
                            return (
                                <Row style={{ textAlign: 'center' }} >
                                    <h1 scope="col" key={index}>{data[0].id}</h1>
                                </Row>
                            );
                        })
                    }
                </Table>
            </div>
        );
    }

}


export default dataposisi;