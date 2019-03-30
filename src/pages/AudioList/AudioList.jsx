import React, { Component } from 'react';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import TabTable from './components/TabTable';

import './AudioList.scss';

export default class AudioList extends Component {
  static displayName = 'AudioList';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const breadcrumb = [
      { text: '音频管理', link: '' },
      { text: '音频列表', link: '#/audio/list' },
    ];
    return (
      <div className="audio-list-page">
        <CustomBreadcrumb dataSource={breadcrumb} />
        <TabTable/>
      </div>
    );
  }
}
