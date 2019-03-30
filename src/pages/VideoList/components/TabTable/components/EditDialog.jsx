import React, { Component } from 'react';
import {Button} from '@alifd/next';

export default class EditDialog extends Component {
  static displayName = 'EditDialog';

  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  onOpen = (index, record) => {

  };

  render() {
    const { index, record } = this.props;

    return (
      <div style={styles.editDialog}>
        <Button type="primary" onClick={() => this.onOpen(index, record)}>
          编辑
        </Button>
      </div>
    );
  }
}

const styles = {
  editDialog: {
    display: 'inline-block',
    marginRight: '5px',
  },
};
