import type { createNativeStackNavigator } from "@react-navigation/native-stack";

export type ScreenFunctionComponent = ReturnType<Parameters<ReturnType<typeof createNativeStackNavigator>['Screen']>[0]['component'] & React.FunctionComponent>;