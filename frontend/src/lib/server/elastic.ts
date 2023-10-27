import { Client } from '@elastic/elasticsearch';

export const client = new Client({
    node: "https://es01:9200",
    auth: {
        username: 'elastic',
        password: 'mediscan'
    },
    tls: {
        rejectUnauthorized: false
    }
});
