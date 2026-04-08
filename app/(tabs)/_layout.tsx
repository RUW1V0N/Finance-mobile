import { Tabs,Redirect } from "expo-router";
import { useSelector, UseSelector } from "react-redux";

export default function TabsLayout() {
  const token = useSelector((state: any)=> state.auth.token);
  
  if (!token) return <Redirect href="/(auth)/login" />;

  return (
    <Tabs screenOptions={{ headerShown: false }} />
  );
}
