import React from 'react';
import DashCalendar from './dashboard/DashCalendar';
import { Card, Row, Col, Divider } from 'antd';
import assignmentImg from '../images/assignment.jpg';
import deadlineImg from '../images/deadline.jpg';
import extracurricularImg from '../images/extracurricular.jpg';
import testImg from '../images/test.jpg';

const Dashboard = (props) => {

  const { Meta } = Card

  return (
    <div>
      <Divider>Upcoming Items</Divider>
      <Row align="middle" gutter={[16, 16]}>
        <Col align="middle" lg={6}>
          <Card style={{height: '350px'}} cover={<img alt="assignments" src={assignmentImg} style={{height: '200px'}}/>}>
            <Meta title="Assignments" description="Description for upcoming assignments card." />
          </Card>
        </Col>
        <Col align="middle" lg={6}>
          <Card style={{height: '350px'}} cover={<img alt="tests" src={testImg} style={{height: '200px'}}/>}>
            <Meta title="Tests" description="Description for upcoming tests card." />
          </Card>
        </Col>
        <Col align="middle" lg={6}>
          <Card style={{height: '350px'}} cover={<img alt="extracurriculars" src={extracurricularImg} style={{height: '200px'}}/>}>
            <Meta title="Extracurriculars" description="Description for upcoming extracurriculars card." />
          </Card>
        </Col>
        <Col align="middle" lg={6}>
          <Card style={{height: '350px'}} cover={<img alt="deadlines" src={deadlineImg} style={{height: '200px'}}/>}>
            <Meta title="School Deadlines" description="Description for upcoming school deadlines card." />
          </Card>
        </Col>
      </Row>
      <Divider>Calendar</Divider>
      <Row>
        <Col span={16} offset={4}>
          <DashCalendar />
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard