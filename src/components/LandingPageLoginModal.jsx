import React, { Component } from 'react';

import { Button, Header, Icon, Modal } from 'semantic-ui-react';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Modal defaultOpen basic size='small'>
        <Header icon='archive' content='Archive Old Messages' />
        <Modal.Content>
          <p>Some stuff</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' inverted>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
