import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import MonWed from '../../components/MonWed/MonWed'
import ThursFri from '../../components/ThursFri/ThursFri'
import SatSun from '../../components/SatSun/SatSun'

import './Input.css'

export class Input extends Component {
    render() {
        return (
            <div className="Input">
                <Tabs>
                    <TabList>
                        <Tab>Mon-Wed</Tab>
                        <Tab>Thurs-Fri</Tab>
                        <Tab>Sat-Sun</Tab>
                    </TabList>
    
                    <TabPanel>
                        <MonWed />
                    </TabPanel>
                    <TabPanel>
                        <ThursFri />
                    </TabPanel>
                    <TabPanel>
                        <SatSun />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default Input
