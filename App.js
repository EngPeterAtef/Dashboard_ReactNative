import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export default function App() {
  // change the degree with time
  const [data, setData] = useState([
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100
  ]);
  const screenWidth = Dimensions.get("window").width;
  const cricularProcessData = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setData([
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,

    },
    propsForDots: {
      r: "6",
      strokeWidth: "5",
      stroke: "#ffa726"
    }
  };
  const pieData = [
    {
      name: "Seoul",
      population: 21500000,
      color: "#8FD253",
      legendFontColor: "black",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#FC778A",
      legendFontColor: "black",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 527612,
      color: "#FECA7C",
      legendFontColor: "black",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "skyblue",
      legendFontColor: "black",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "#D28BCD",
      legendFontColor: "black",
      legendFontSize: 15
    }
  ];
  const commitsData = [
    { date: "2017-01-02", count: 1 },
    { date: "2017-01-03", count: 2 },
    { date: "2017-01-04", count: 3 },
    { date: "2017-01-05", count: 4 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 2 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 2 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-02-30", count: 4 }
  ];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={true}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.appBarView}>
          <Text style={styles.appTitle}>Dashboard</Text>
        </View>
        <View style={styles.chartTitleview}>
          <Text style={styles.charTitle}>Line Chart</Text>
        </View>
        <View style={styles.dynamicChart}>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: data
                },
              ],
              legend: ["Total Income"] // optional
            }}
            width={screenWidth} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
        <View style={styles.chartTitleview}>
          <Text style={styles.charTitle}>Progress Ring</Text>
        </View>
        <View style={styles.dynamicChart}>
          <ProgressChart
            data={cricularProcessData}
            width={screenWidth}
            height={220}
            strokeWidth={12}
            radius={25}
            chartConfig={chartConfig}
            hideLegend={false}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
        <View style={styles.chartTitleview}>
          <Text style={styles.charTitle}>Bar Chart</Text>
        </View>
        <View style={styles.dynamicChart}>
          <BarChart
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: data
                },
              ],
              legend: ["Total Income"] // optional
            }}
            width={screenWidth}
            height={220}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={15}
          />
        </View>
        <View style={styles.chartTitleview}>
          <Text style={styles.charTitle}>StackedBar chart</Text>
        </View>
        <View style={styles.dynamicChart}>
          <StackedBarChart
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
            data={{
              labels: ["Test1", "Test2"],
              legend: ["L1", "L2", "L3"],
              data: [
                [60, 60, 60],
                [30, 30, 60]
              ],
              barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
            }}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
        </View>
        <View style={styles.chartTitleview}>
          <Text style={styles.charTitle}>Pie Chart</Text>
        </View>
        <View style={styles.dynamicChart}>
          <PieChart
            data={pieData}
            width={screenWidth}
            height={250}
            chartConfig={{
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              margin: 10,
            }}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[10, 30]}
            absolute
          />
        </View>
        <View style={styles.chartTitleview}>
          <Text style={styles.charTitle}>Contribution Graph (heatmap)</Text>
        </View>
        <View style={styles.dynamicChart}>
          <ContributionGraph
            values={commitsData}
            endDate={new Date("2017-04-01")}
            numDays={105}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            onDayPress={(item) => Alert.alert("Selected Day", item.date, [], { cancelable: true, AlertDialog: true })}
            style={{
              marginVertical: 10,
              borderRadius: 16
            }}
          />
          <View style={styles.chartTitleview}>
            <Text style={styles.charTitle}>End of the Dashboard</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
//exp://192.168.45.28:8081
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonContianer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  btn: () => ({
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 10,
    // transform: [{ rotate: `${degree}deg` }],
    shadowColor: 'purple',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  }),
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  dynamicChart: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    width: '100%',
  },
  appBarView: {
    width: '100%',
    height: 50,
    backgroundColor: "#fb8c00",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
  chartTitleview: {
    width: '100%',
    borderColor: "#fb8c00",
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 2,
  },
  charTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    width: '100%',
    color: "#000",
  },
});
