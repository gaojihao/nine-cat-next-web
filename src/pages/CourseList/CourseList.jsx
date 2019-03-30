import React, { Component } from 'react';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import TabTable from './components/TabTable';
import './CourseList.scss';

export default class CourseList extends Component {
  static displayName = 'CourseList';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const breadcrumb = [
      { text: '课程管理', link: '' },
      { text: '课程列表', link: '#/post/list' },
    ];
    return (
      <div className="course-list-page">
        <CustomBreadcrumb dataSource={breadcrumb} />
        <TabTable/>
      </div>
    );
  }
}
