

import React, { Component } from 'react';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';

import './CreateCourse.scss';

export default class CreateCourse extends Component {
  static displayName = 'CreateCourse';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const breadcrumb = [
      { text: '课程管理', link: '' },
      { text: '添加课程', link: '#/course/create' },
    ];
    return (
      <div className="create-course-page">
        <CustomBreadcrumb dataSource={breadcrumb} />
      </div>
    );
  }
}
