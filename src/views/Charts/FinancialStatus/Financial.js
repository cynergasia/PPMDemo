import React, { Component, lazy, Suspense } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar, Bubble } from 'react-chartjs-2';
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
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

const Widget03 = lazy(() => import('../../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const mainChart = {
    labels: ['Dec/18', 'Jan-19', 'Feb-19', 'Mar-19', 'Apr-19', 'May-19', 'Jun-19'],
    datasets: [
        {
            label: 'Contracted Value',
            backgroundColor: hexToRgba(brandInfo, 10),
            borderColor: 'black',
            pointHoverBackgroundColor: '#fff',
            borderWidth: 3,
            data: [3.5, 3.5, 3.3, 3.4, 3.2, 3.0, 3.5, 3.0, 2.8],
        },
        {
            label: 'Invoiced Amounts',
            backgroundColor: 'transparent',
            borderColor: brandSuccess,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 3,
            data: [, 2.5, 2.4, 2.5, 2.3, 2.4, 3.2, 2.3, 2.2],
        },
        {
            label: 'Paid',
            backgroundColor: 'transparent',
            borderColor: brandDanger,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 3,
            // borderDash: [8, 5],
            data: [2.3, 2.4, 2.5, 2.5, 2.6, 2.8, 3.0, 2.8, 2.2],
        },
    ],
};

const mainChartOpts = {
    tooltips: {
        enabled: false,
        custom: CustomTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
            labelColor: function (tooltipItem, chart) {
                return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
            }
        }
    },
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [
            {
                gridLines: {
                    drawOnChartArea: false,
                },
            }],
        yAxes: [
            {
                ticks: {
                    beginAtZero: false,
                    maxTicksLimit: 7,
                    stepSize: 0.5,
                    max: 4.5,
                },
            }],
    },
    elements: {
        point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
        },
    },
};

class Financial extends Component {
    render() {
        return (
            <div className='chart-wrapper financial'>
                <Line data={mainChart} options={mainChartOpts} height={320} />
            </div>
        )
    }
}

export default Financial
