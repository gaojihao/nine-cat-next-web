

import React, { Component } from 'react';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';

import './CreateVideo.scss';

export default class CreateVideo extends Component {
  static displayName = 'CreateVideo';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const breadcrumb = [
      { text: '视频管理', link: '' },
      { text: '添加视频', link: '#/video/create' },
    ];
    return (
      <div className="create-video-page">
        <CustomBreadcrumb dataSource={breadcrumb} />
      </div>
    );
  }
}
