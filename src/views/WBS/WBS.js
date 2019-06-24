import React, { Component } from 'react'
import {Row,Col,Card,CardBody} from 'reactstrap'
import WBSList_IMG from '../../assets/img/WBSList.png'
import {Link} from 'react-router-dom'

class WBS extends Component {
    render() {
        return (
        <React.Fragment>
        <div className="animated fadeIn">
          <Row>
            <Col sm="12" md="12" lg="12">
              <nav className="sub-navbar" aria-label="breadcrumb">
                <div class="row">
                  <div class="col-12 col-sm-12 col-lg-12">
                    <ol className="breadcrumb left-breadcrumb">
                      <li className="nav-head active" area-current="page">
                        <Link to="/projectWiki">
                          <i className="fa fa-map-marker" /> BExtensions N/Cape
                          Mall Phase 3 (60453005)
                        </Link>
                      </li>
                    </ol>
                  </div>
                </div>
              </nav>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12" lg="12">
              <Card>
                  <CardBody className="text-center">
                    <img src={WBSList_IMG} alt={""} />
                  </CardBody>
              </Card>
            </Col>
          </Row>
          </div>
            </React.Fragment>
        )
    }
}

export default WBS
