import "./styles/global.css"
import PropertyListing from "@/components/PropertyListing";
// Update the import path to match your actual styles file location and name
// Update the import path to match your actual styles file location and name
// Update the import path below to the correct location and filename of your styles file
import { styles } from "@/styles/_homestyle";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { FILTERS, SAMPLE_DATA } from "@/constants/data";
// Ensure SAMPLE_DATA is an array of Property objects, not PropertyListingProps[]

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchGroup}>
        <View style={styles.searchFormGroup}>
          <View style={styles.searchControlGroup}>
            <Text style={styles.searchFormText}>Where to?</Text>
            <TextInput
              style={{ ...styles.searchControl, ...styles.searchFormText }}
              placeholder="Location . Date . Add guest"
            />
          </View>
          <View style={styles.searchButton}>
            <Feather name="search" size={24} color="white" />
          </View>
        </View>
      </View>

      <View
        style={{
          height: 72,
          backgroundColor: "white",
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterGroup}>
            {FILTERS.map((filter, index) => (
              <View style={styles.filterContainer} key={index}>
                <Image
                  style={{
                    flex: 1,
                  }}
                  source={require("@/assets/images/mansion.png")}
                  resizeMode="contain"
                />
                <Text>{filter}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

    <ScrollView style={styles.listingContainer}>
      {SAMPLE_DATA.map((property, idx) => (
        <PropertyListing key={idx} listings={[property]} />
      ))}
      <View style={styles.paginationContainer}>
        <TouchableHighlight style={styles.showMoreButton}>
        <Text style={styles.showMoreButtonText}>Show more</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
    </View>
  );
};

export default Home;