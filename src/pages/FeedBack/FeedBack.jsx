import React, { Component } from 'react';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import TabTable from './components/TabTable';

import './FeedBack.scss';

export default class FeedBack extends Component {
  static displayName = 'FeedBack';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const breadcrumb = [
      { text: '反馈管理', link: '' },
      { text: '反馈列表', link: '#/feedback/list' },
    ];
    return (
      <div className="list-feedback-page">
        <CustomBreadcrumb dataSource={breadcrumb} />
        <TabTable/>
      </div>
    );
  }
}
