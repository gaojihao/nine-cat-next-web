import React, { Component } from 'react';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';

import './FeedBackDetail.scss';

export default class FeedBackDetail extends Component {
  static displayName = 'FeedBackDetail';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const breadcrumb = [
      { text: '反馈管理', link: '' },
      { text: '反馈详情', link: '#/feedback/detail' },
    ];
    return (
      <div className="detail-feedback-page">
        <CustomBreadcrumb dataSource={breadcrumb} />
      </div>
    );
  }
}
