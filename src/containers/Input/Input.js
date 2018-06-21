import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './Input.css'

export class Input extends Component {
  render() {
    return (
      <Tabs>
    <TabList>
      <Tab>Monday-Wednesday</Tab>
      <Tab>Thursday-Friday</Tab>
      <Tab>Saturday-Sunday</Tab>
    </TabList>

    <TabPanel>
      <h2>Monday through wednesday content</h2>
    </TabPanel>
    <TabPanel>
      <h2>Thursday friday content</h2>
    </TabPanel>
    <TabPanel>
      <h2>Saturday sunday content</h2>
    </TabPanel>
  </Tabs>
    )
  }
}

export default Input
