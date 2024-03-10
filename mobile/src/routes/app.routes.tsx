import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../pages/Dashboard";
import Oder from "../pages/Order";
import FinishOrder from "../pages/FinishOrder";

export type StackParamsList = {
    Dashboard: undefined;
    Order: {
        number: number | string;
        order_id: string;
    };
    FinishOrder: {
        number: number | string;
        order_id: string;
    };
}

const Stack = createNativeStackNavigator<StackParamsList>();

function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Dashboard" 
                component={Dashboard}
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name="Order" 
                component={Oder}
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name="FinishOrder" 
                component={FinishOrder}
                options={{
                    title: "Finalizando",
                    headerStyle:{
                        backgroundColor: '#211A1D'
                    },
                    headerTintColor: '#FFF'
                }}
            />
        </Stack.Navigator>
    )
}

export default AppRoutes;