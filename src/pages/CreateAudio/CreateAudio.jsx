import React, { Component } from 'react';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import './CreateAudio.scss';

export default class CreateAudio extends Component {
  static displayName = 'CreateAudio';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const breadcrumb = [
      { text: '音频管理', link: '' },
      { text: '添加音频', link: '#/audio/create' },
    ];
    return (
      <div className="audio-create-page">
        <CustomBreadcrumb dataSource={breadcrumb} />
      </div>
    );
  }
}
