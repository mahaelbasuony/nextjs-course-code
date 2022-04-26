const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: "mahamed7at",
                mongodb_password: "Asp.net2011",
                mongodb_clustername: "cluster0",
                mongodb_database: "meetups",
            },
        };
    }

    return {
        env: {
            mongodb_username: "mahamed7at",
            mongodb_password: "Asp.net2011",
            mongodb_clustername: "cluster0",
            mongodb_database: "meetups",
        },
    };
};