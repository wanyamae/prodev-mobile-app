import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { styles } from "@/styles/_mainstyle";

export default function Search() {
	const [query, setQuery] = useState("");
	return (
		<ScrollView style={styles.container}>
			<View style={{ padding: 24 }}>
				<Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 16 }}>Search</Text>
				<TextInput
					style={{ borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, marginBottom: 16 }}
					placeholder="Search for properties, locations, etc."
					value={query}
					onChangeText={setQuery}
				/>
				<Text style={{ color: "#888" }}>
					No results found. Try searching for something else.
				</Text>
			</View>
		</ScrollView>
	);
}
