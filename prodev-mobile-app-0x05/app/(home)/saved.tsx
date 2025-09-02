import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "@/styles/_mainstyle";

export default function Saved() {
	return (
		<ScrollView style={styles.container}>
			<View style={{ padding: 24 }}>
				<Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 16 }}>Saved Properties</Text>
						<Text style={{ color: "#888" }}>
							You haven&apos;t saved any properties yet. Start exploring and save your favorites!
						</Text>
			</View>
		</ScrollView>
	);
}
