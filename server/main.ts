import { Meteor } from "meteor/meteor";
import { ServiceConfiguration } from 'meteor/service-configuration';

import { Main } from "./imports/server-main/main";

const mainInstance = new Main();
mainInstance.start();

Meteor.startup(() => {
    ServiceConfiguration.configurations.upsert(
        {
            "service": "google"
        },
        {
            $set: {
                clientId: "--REDACTED--",
                secret: "--REDACTED--"
            }
        }
    )
})
