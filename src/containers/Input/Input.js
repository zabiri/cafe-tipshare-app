import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import MonWed from '../../components/MonWed/MonWed'
import Thurs from '../../components/Thurs/Thurs'
import Fri from '../../components/Fri/Fri'
import SatSun from '../../components/SatSun/SatSun'

import './Input.css'

export class Input extends Component {
    
    render() {
        return (
            <div className="Input">
                <Tabs>
                    <TabList>
                        <Tab>MTW</Tab>
                        <Tab>Thurs</Tab>
                        <Tab>Fri</Tab>
                        <Tab>Sat-Sun</Tab>
                    </TabList>
                    <div className="Input__panels">

                        <TabPanel>
                            <MonWed />
                        </TabPanel>
                        <TabPanel>
                            <Thurs />
                        </TabPanel>
                        <TabPanel>
                            <Fri />
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
