import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Repositorios",
          title: "Repositorios",
          headerTitle: "Repositorios",
        }}
      />
      <Tabs.Screen name="List" />
      <Tabs.Screen name="SignIng" />
    </Tabs>
  );
};
