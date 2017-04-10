import diregister from "electrode-ota-server-diregister";
import client from './index';

export const register = diregister({
    name: "ota!cassandra",
    multiple: false,
    connections: false,
    dependencies: []
}, async (clientOptions, plugins, cassandra) => {
    console.log('clientOptions', clientOptions);
    return await client({clientOptions})
});
export default ({register});