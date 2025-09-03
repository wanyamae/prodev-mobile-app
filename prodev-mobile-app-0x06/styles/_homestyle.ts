import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchGroup: {
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  searchControl: {
    fontSize: 16,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "#fafafa",
  },
  searchButton: {
    backgroundColor: "#34967C",
    borderRadius: 8,
    padding: 10,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  filterContainer: {
    alignItems: "center",
    marginRight: 16,
    width: 60,
    height: 60,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  listingContainer: {
    padding: 16,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export { styles };
