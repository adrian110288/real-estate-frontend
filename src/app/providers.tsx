"use client";

import StoreProvider from "@/state/redux";
import { Authenticator } from "@aws-amplify/ui-react";
import Auth from "./(auth)/authProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreProvider>
            <Authenticator.Provider>
                <Authenticator.Provider>
                    <Auth>{children}</Auth>
                </Authenticator.Provider>
            </Authenticator.Provider>
        </StoreProvider>
    );
};

export default Providers;
