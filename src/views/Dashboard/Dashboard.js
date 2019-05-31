import React, { Component, lazy, Suspense } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bar, Doughnut, Line, Pie, Polar, Radar, Bubble } from 'react-chartjs-2';
import Risk from './../Charts/RiskGraph/Risks';
import Project from './../Charts/MyProject/Project';
import Financial from './../Charts/FinancialStatus/Financial';
import Calendar from '../Charts/Calender/Calendar'

import Menu from './Menu';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')
//Doughnut Chart with some specific data
const doughnut = {
  labels: [
    'Red',
    'Green',
    'Yellow',
  ],
  datasets: [
    {
      data: [300, 200, 50],
      backgroundColor: [
        '#FF6384',
        '#4dbd74',
        '#FFCE56',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#4dbd74',
        '#FFCE56',
      ],
    }],
};
const summaryMilestone = {
  labels: [
    'Red',
    'Green',
    'Yellow',
  ],
  datasets: [
    {
      data: [300, 200, 50],
      backgroundColor: [
        '#FF6384',
        '#4dbd74',
        '#FFCE56',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#4dbd74',
        '#FFCE56',
      ],
    }],
};
const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}
class Dashboard extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Menu />
          </Col>
        </Row>
        {/* MyProject and Financial status  */}
        <Row>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardHeader>
                My Project
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Project />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardHeader>
                Financial Status
                <div className="card-header-actions">
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper financial" >
                  <Financial />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="8" sm="4" lg="2">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value">71.92%</div>
                <Link to="/500">
                  <div className="text-summary">Complete</div>
                </Link>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '30px' }}>

              </div>
            </Card>
          </Col>

          <Col xs="8" sm="4" lg="2">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <div className="text-value">45</div>
                <Link to="/500">
                  <div className="text-summary"> Active Workpackages</div>
                </Link>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '30px' }}>
              </div>
            </Card>
          </Col>

          <Col xs="8" sm="4" lg="2">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <div className="text-value">9</div>
                <Link to="/500">
                  <div className="text-summary">Open Activitiess</div>
                </Link>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '30px' }}>
              </div>
            </Card>
          </Col>

          <Col xs="8" sm="4" lg="2">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <div className="text-value">6</div>
                <Link to="/500">
                  <div className="text-summary">Open Issues</div>
                </Link>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '30px' }}>
              </div>
            </Card>
          </Col>

          <Col xs="8" sm="4" lg="2">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <div className="text-value">5</div>
                <Link to="/500">
                  <div className="text-summary">Pending Risks</div>
                </Link>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '30px' }}>

              </div>
            </Card>
          </Col>
          <Col xs="8" sm="4" lg="2">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <div className="text-value">3</div>
                <Link to="/500">
                  <div className="text-summary">Pending Changes</div>
                </Link>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '30px' }}>

              </div>
            </Card>
          </Col>

        </Row>
        <Row>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardHeader>
                Risk All Project
                <div className="card-header-actions">
                  <i class="fa fa-download card-header-icons" aria-hidden="true"></i>
                  <i class="fa fa-ellipsis-h card-header-icons"></i>
                  {/* <i class="fa fa-th"></i> */}
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" sm="12" lg="5"  >
                    <div className="chart-wrapper">
                      <Risk />
                    </div>
                  </Col >
                  <Col xs="12" sm="12" lg="3"  >
                    <div className="chart-wrapper">
                      <h6 class="chart-title">RISK SCORE</h6>
                      <div className="summary-status-value-wrap">

                        <div className="left">
                          <div className="property-value" style={{ backgroundColor: brandDanger }}>

                          </div>
                          <div className="property">
                            20
                                </div>
                        </div>
                        <div className="right">
                          1
                            </div>
                      </div>

                      <div className="summary-status-value-wrap">
                        <div className="left">
                          <div className="property-value" style={{ backgroundColor: 'purple' }}>

                          </div>
                          <div className="property">
                            16
                                </div>
                        </div>
                        <div className="right">
                          2
                            </div>
                      </div>


                      <div className="summary-status-value-wrap">
                        <div className="left">
                          <div className="property-value" style={{ backgroundColor: 'black' }} >

                          </div>
                          <div className="property">
                            12
                                </div>
                        </div>
                        <div className="right">
                          1
                            </div>
                      </div>
                      <div className="summary-status-value-wrap">
                        <div className="left">
                          <div className="property-value" style={{ backgroundColor: 'green' }}>

                          </div>
                          <div className="property">
                            12
                                </div>
                        </div>
                        <div className="right">
                          1
                            </div>
                      </div>
                      <div className="summary-status-value-wrap">
                        <div className="left">
                          <div className="property-value" style={{ backgroundColor: 'yellow' }}>

                          </div>
                          <div className="property">
                            9
                                </div>
                        </div>
                        <div className="right">
                          1
                            </div>
                      </div>
                      <div className="summary-status-value-wrap">
                        <div className="left">
                          <div className="property-value" style={{ backgroundColor: 'green' }}>

                          </div>
                          <div className="property">
                            6
                            </div>
                        </div>
                        <div className="right">
                          2
                            </div>
                      </div>
                    </div>
                  </Col >
                  <Col xs="12" sm="12" lg="4"  >
                    <div className="title-wrap">
                      <h6 className="left">TARGET DATE</h6>
                      <h6 className="right">3 OVERDUE</h6>
                    </div>
                    <Row>
                      <Col xs="8" sm="6" lg="6">
                        <div className="target-date-wrapper">
                          <div className="inner-td-wrapper">
                            <h4>0</h4>
                            <p>TODAY</p>
                          </div>
                          <div className="inner-td-wrapper">
                            <h4>0</h4>
                            <p>THIS WEEK</p>
                          </div>
                        </div>
                      </Col>
                      <Col xs="8" sm="6" lg="6">
                        <div className="target-date-wrapper">
                          <div className="inner-td-wrapper">
                            <h4>0</h4>
                            <p>TOMMOROW</p>
                          </div>
                          <Link to="/500">
                            <div className="inner-td-wrapper">
                              <h4>3</h4>
                              <p>THIS MONTH</p>
                            </div>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </Col >
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardHeader>
                Issue All Projects
              <div className="card-header-actions">
                  {/* <a href="http://www.chartjs.org" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a> */}

                  <i class="fa fa-download card-header-icons" aria-hidden="true"></i>


                  <i class="fa fa-ellipsis-h card-header-icons"></i>

                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="8" sm="4" lg="6">
                    <div className="chart-wrapper">
                      <Doughnut data={summaryMilestone} />
                    </div>
                  </Col >
                  <Col xs="8" sm="4" lg="6">
                    <h6 className="chart-title">STATUS</h6>
                    <Row>
                      <Col xs="8" sm="6" lg="6">
                        <div className="chart-wrapper">

                          <div className="summary-status-value-wrap">
                            <div className="left">
                              <div className="property-value" style={{ backgroundColor: brandDanger }}>

                              </div>
                              <div className="property">
                                Overdue
                                </div>
                            </div>
                            <div className="right">
                              3
                            </div>
                          </div>

                          <div className="summary-status-value-wrap">
                            <div className="left">
                              <div className="property-value" style={{ backgroundColor: 'purple' }}>

                              </div>
                              <div className="property">
                                Action Required
                                </div>
                            </div>
                            <div className="right">
                              0
                            </div>
                          </div>


                          <div className="summary-status-value-wrap">
                            <div className="left">
                              <div className="property-value" style={{ backgroundColor: 'black' }} >

                              </div>
                              <div className="property">
                                On Hold
                                </div>
                            </div>
                            <div className="right">
                              0
                            </div>
                          </div>
                          <div className="summary-status-value-wrap">
                            <div className="left">
                              <div className="property-value" style={{ backgroundColor: 'green' }}>

                              </div>
                              <div className="property">
                                At Risk
                                </div>
                            </div>
                            <div className="right">
                              0
                            </div>
                          </div>
                        </div>
                      </Col >
                      <Col xs="8" sm="6" lg="6">
                        <div className="chart-wrapper">
                          <div className="summary-status-value-wrap">
                            <div className="left">
                              <div className="property-value" style={{ backgroundColor: 'yellow' }}>

                              </div>
                              <div className="property">
                                Completed
                                </div>
                            </div>
                            <div className="right">
                              2
                            </div>
                          </div>
                          <div className="summary-status-value-wrap">
                            <div className="left">
                              <div className="property-value" style={{ backgroundColor: 'black' }}>

                              </div>
                              <div className="property">
                                Not started
                                </div>
                            </div>
                            <div className="right">
                              0
                            </div>
                          </div>
                          <div className="summary-status-value-wrap">
                            <div className="left">
                              <div className="property-value" style={{ backgroundColor: 'black' }}>

                              </div>
                              <div className="property">
                                Started
                                </div>
                            </div>
                            <div className="right">
                              1
                            </div>
                          </div>
                        </div>
                      </Col >
                    </Row>
                  </Col >
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardHeader>
                Change Register
                <div className="card-header-actions">
                  <i class="fa fa-download card-header-icons" aria-hidden="true"></i>
                  <i class="fa fa-ellipsis-h card-header-icons"></i>
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" sm="12" lg="5"  >
                    <div className="chart-wrapper">
                      <Doughnut data={summaryMilestone} />
                    </div>
                  </Col >
                  <Col xs="12" sm="12" lg="3"  >
                    <div className="chart-wrapper">
                      <h6 class="chart-title">Status</h6>
                      <div className="summary-status-value-wrap">

                        <div className="left">
                          <div className="property-value" style={{ backgroundColor: brandDanger }}>

                          </div>
                          <div className="property">
                            Logged
                                </div>
                        </div>
                        <div className="right">
                          3
                            </div>
                      </div>

                      <div className="summary-status-value-wrap">
                        <div className="left">
                          <div className="property-value" style={{ backgroundColor: 'purple' }}>

                          </div>
                          <div className="property">
                            Closed
                                </div>
                        </div>
                        <div className="right">
                          1
                            </div>
                      </div>
                    </div>
                  </Col >
                  <Col xs="12" sm="12" lg="4"  >
                    <div className="title-wrap">
                      <h6 className="left">TARGET DATE</h6>
                      {/* <h6 className="right">3 OVERDUE</h6> */}
                    </div>
                    <Row>
                      <Col xs="8" sm="6" lg="6">
                        <div className="target-date-wrapper">
                          <div className="inner-td-wrapper">
                            <h4>1</h4>
                            <p>TODAY</p>
                          </div>
                          <div className="inner-td-wrapper">
                            <h4>1</h4>
                            <p>THIS WEEK</p>
                          </div>
                        </div>
                      </Col>
                      <Col xs="8" sm="6" lg="6">
                        <div className="target-date-wrapper">
                          <div className="inner-td-wrapper">
                            <h4>0</h4>
                            <p>TOMMOROW</p>
                          </div>
                          <div className="inner-td-wrapper">
                            <h4>1</h4>
                            <p>THIS MONTH</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col >
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardHeader>
                Calendar
              <div className="card-header-actions">
                  {/* <a href="http://www.chartjs.org" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a> */}
                  <i class="fa fa-download card-header-icons" aria-hidden="true"></i>
                  <i class="fa fa-ellipsis-h card-header-icons"></i>
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" sm="12" lg="12">
                    <Calendar />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardHeader>
                Activities
                <div className="card-header-actions">
                  <i class="fa fa-download card-header-icons" aria-hidden="true"></i>
                  <i class="fa fa-ellipsis-h card-header-icons"></i>
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" sm="12" lg="5"  >
                    <div className="chart-wrapper">
                      <Doughnut data={summaryMilestone} />
                    </div>
                  </Col >
                  <Col xs="12" sm="12" lg="3"  >
                    <div className="chart-wrapper">
                      <h6 class="chart-title">  STATUS</h6>
                      <div className="summary-status-value-wrap">

                        <div className="left">
                          <div className="property-value" style={{ backgroundColor: brandDanger }}>

                          </div>
                          <div className="property">
                            Overdue
                                </div>
                        </div>
                        <div className="right">
                          4
                            </div>
                      </div>

                      <div className="summary-status-value-wrap">
                        <div className="left">
                          <div className="property-value" style={{ backgroundColor: 'purple' }}>

                          </div>
                          <div className="property">
                            Action Required
                                </div>
                        </div>
                        <div className="right">
                          0
                            </div>
                      </div>


                      <div className="summary-status-value-wrap">
                        <div className="left">
                          <div className="property-value" style={{ backgroundColor: 'black' }} >

                          </div>
                          <div className="property">
                            On Hold
                                </div>
                        </div>
                        <div className="right">
                          0
                            </div>
                      </div>
                      <div className="summary-status-value-wrap">
                        <div className="left">
                          <div className="property-value" style={{ backgroundColor: 'green' }}>

                          </div>
                          <div className="property">
                            At Risk
                                </div>
                        </div>
                        <div className="right">
                          0
                            </div>
                      </div>
                    </div>
                  </Col >
                  <Col xs="12" sm="12" lg="4"  >
                    <div className="title-wrap">
                      <h6 className="left">DUE DATE</h6>
                      <h6 className="right">4 OVERDUE</h6>
                    </div>
                    <Row>
                      <Col xs="8" sm="6" lg="6">
                        <div className="target-date-wrapper">
                          <div className="inner-td-wrapper">
                            <h4>0</h4>
                            <p>TODAY</p>
                          </div>
                          <div className="inner-td-wrapper">
                            <h4>0</h4>
                            <p>THIS WEEK</p>
                          </div>
                        </div>
                      </Col>
                      <Col xs="8" sm="6" lg="6">
                        <div className="target-date-wrapper">
                          <div className="inner-td-wrapper">
                            <h4>0</h4>
                            <p>TOMMOROW</p>
                          </div>
                          <div className="inner-td-wrapper">
                            <h4>0</h4>
                            <p>THIS MONTH</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col >
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardHeader>
                Deliverables
                <div className="card-header-actions">
                  <i class="fa fa-download card-header-icons" aria-hidden="true"></i>
                  <i class="fa fa-ellipsis-h card-header-icons"></i>
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" sm="12" lg="5"  >
                    <div className="chart-wrapper">
                      <Doughnut data={summaryMilestone} />
                    </div>
                  </Col >
                  <Col xs="12" sm="12" lg="3"  >
                    <div className="chart-wrapper">
                      <h6 class="chart-title">STATUS</h6>
                      <div className="summary-status-value-wrap">

                        <div className="left">
                          <div className="property-value" style={{ backgroundColor: brandDanger }}>

                          </div>
                          <div className="property">
                            Overdue
                                </div>
                        </div>
                        <div className="right">
                          4
                            </div>
                      </div>

                      <div className="summary-status-value-wrap">
                        <div className="left">
                          <div className="property-value" style={{ backgroundColor: 'purple' }}>

                          </div>
                          <div className="property">
                            Action Required
                                </div>
                        </div>
                        <div className="right">
                          0
                            </div>
                      </div>


                      <div className="summary-status-value-wrap">
                        <div className="left">
                          <div className="property-value" style={{ backgroundColor: 'black' }} >

                          </div>
                          <div className="property">
                            On Hold
                                </div>
                        </div>
                        <div className="right">
                          0
                            </div>
                      </div>
                      <div className="summary-status-value-wrap">
                        <div className="left">
                          <div className="property-value" style={{ backgroundColor: 'green' }}>

                          </div>
                          <div className="property">
                            At Risk
                                </div>
                        </div>
                        <div className="right">
                          0
                            </div>
                      </div>
                    </div>
                  </Col >
                  <Col xs="12" sm="12" lg="4"  >
                    <div className="title-wrap">
                      <h6 className="left">DUE DATE</h6>
                      <h6 className="right">4 OVERDUE</h6>
                    </div>
                    <Row>
                      <Col xs="8" sm="6" lg="6">
                        <div className="target-date-wrapper">
                          <div className="inner-td-wrapper">
                            <h4>0</h4>
                            <p>TODAY</p>
                          </div>
                          <div className="inner-td-wrapper">
                            <h4>0</h4>
                            <p>THIS WEEK</p>
                          </div>
                        </div>
                      </Col>
                      <Col xs="8" sm="6" lg="6">
                        <div className="target-date-wrapper">
                          <div className="inner-td-wrapper">
                            <h4>0</h4>
                            <p>TOMMOROW</p>
                          </div>
                          <div className="inner-td-wrapper">
                            <h4>0</h4>
                            <p>THIS MONTH</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col >
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                Traffic {' & '} Sales
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="6" xl="6">
                    <hr className="mt-0" />
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Monday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="34" />
                        <Progress className="progress-xs" color="danger" value="78" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Tuesday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="56" />
                        <Progress className="progress-xs" color="danger" value="94" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Wednesday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="12" />
                        <Progress className="progress-xs" color="danger" value="67" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Thursday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="43" />
                        <Progress className="progress-xs" color="danger" value="91" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Friday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="22" />
                        <Progress className="progress-xs" color="danger" value="73" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Saturday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="53" />
                        <Progress className="progress-xs" color="danger" value="82" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Sunday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="9" />
                        <Progress className="progress-xs" color="danger" value="69" />
                      </div>
                    </div>
                    <div className="legend text-center">
                      <small>
                        <sup className="px-1"><Badge pill color="info">&nbsp;</Badge></sup>
                        New clients
                        &nbsp;
                        <sup className="px-1"><Badge pill color="danger">&nbsp;</Badge></sup>
                        Recurring clients
                      </small>
                    </div>
                  </Col>

                  <Col>
                    <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                      <thead className="thead-light">
                        <tr>
                          <td colspan="3" className="text-center" style={{ background: "#ccecff", fontWeight: 600 }}>Notificaitons</td>
                        </tr>
                        <tr>
                          <th className="text-center">Due Date V</th>
                          <th className="text-center">Project</th>
                          <th className="text-center">Notification</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center"><div>4/22/2019</div></td>
                          <td className="text-center"><div>Project 4</div></td>
                          <td className="text-center"><div>Invoice Approval Pending</div></td>
                        </tr>

                        <tr>
                          <td className="text-center"><div>4/22/2019</div></td>
                          <td className="text-center"><div>Project 5</div></td>
                          <td className="text-center"><div>Status Report Pending</div></td>
                        </tr>
                        <tr>
                          <td className="text-center"><div>4/22/2019</div></td>
                          <td className="text-center"><div>Project 6</div></td>
                          <td className="text-center"><div>Issue Review pending</div></td>
                        </tr>
                      </tbody>
                    </Table>

                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
