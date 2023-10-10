import React from 'react';
import { Icon, IconElement, Tab, TabBar, TabView, Layout, Text } from '@ui-kitten/components';
import QuickTasker from './QuickTasker';
import { StyleSheet } from 'react-native';
import ViewTasks from './ViewTask'
import MyProfile from './MyProfile';

const PlayIcon = (props) => (
  <Icon
    {...props}
    name='play-circle-outline'
  />
);

const ListICon = (props) => (
  <Icon
    {...props}
    name='list-outline'
  />
);

const PersonIcon = (props) => (
  <Icon
    {...props}
    name='person-outline'
  />
);
export const TabNavigator = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
  
    return (
      <TabView
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}
      >
        <Tab title='Zap' icon={PlayIcon}>
          <Layout >
            <QuickTasker/>
          </Layout>
        </Tab>

        <Tab title='Tasks' icon={ListICon}>
          <Layout>
            <ViewTasks/>
          </Layout>
        </Tab>
        <Tab title='Profile'>
          <Layout>
            <MyProfile/>
          </Layout>
        </Tab>
      </TabView>
    );
  };
  
  const styles = StyleSheet.create({
    tabContainer: {
      height: 64,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default TabNavigator