import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import MonWed from '../../components/MonWed/MonWed'
import ThursFri from '../../components/ThursFri/ThursFri'
import SatSun from '../../components/SatSun/SatSun'

import './Input.css'

export class Input extends Component {
    state = {
        grossTips: 0,
        clockOut: null,

    }
    render() {
        return (
            <div className="Input">
                <Tabs>
                    <TabList>
                        <Tab>Mon-Wed</Tab>
                        <Tab>Thurs-Fri</Tab>
                        <Tab>Sat-Sun</Tab>
                    </TabList>
                    <div className="Input__panels">

                        <TabPanel>
                            <MonWed />
                        </TabPanel>
                        <TabPanel>
                            <ThursFri />
                        </TabPanel>
                        <TabPanel>
                            <SatSun />
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        )
    }
}

export default Input
