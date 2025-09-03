import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "@/styles/_mainstyle";

export default function Inbox() {
	return (
		<ScrollView style={styles.container}>
			<View style={{ padding: 24 }}>
				<Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 16 }}>Inbox</Text>
				<Text style={{ color: "#888" }}>
					No messages yet. When you receive messages, they will appear here.
				</Text>
			</View>
		</ScrollView>
	);
}
