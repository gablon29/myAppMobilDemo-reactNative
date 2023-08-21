import { Tabs } from "expo-router";
import Home from "../../src/components/Home";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarLabelPosition: "below-icon" }}>
      <Tabs.Screen name="index" options={{ headerTitle: "Repositorios" }} />
      <Tabs.Screen name="List" />
    </Tabs>
  );
}
