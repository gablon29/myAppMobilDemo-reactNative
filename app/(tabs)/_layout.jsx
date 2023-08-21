import { Tabs } from "expo-router";
import Home from "../../src/components/Home";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="List" />
    </Tabs>
  );
}
