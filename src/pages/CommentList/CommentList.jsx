import React, { Component } from 'react';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import './CommentList.scss';

export default class CommentList extends Component {
  static displayName = 'CommentList';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const breadcrumb = [
      { text: '评论管理', link: '' },
      { text: '评论列表', link: '#/comment/list' },
    ];
    return (
      <div className="course-list-page">
        <CustomBreadcrumb dataSource={breadcrumb} />
      </div>
    );
  }
}
