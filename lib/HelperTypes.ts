import type { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { Icon } from "@expo/vector-icons/build/createIconSet";
import { Ionicons } from "@expo/vector-icons";

export type ScreenFunctionComponent = ReturnType<Parameters<ReturnType<typeof createNativeStackNavigator>['Screen']>[0]['component'] & React.FunctionComponent>;

type ExtractIcon<T> = T extends Icon<infer U, "ionicons"> ? U : never;
export type IoniconsIconName = ExtractIcon<typeof Ionicons>;