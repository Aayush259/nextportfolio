import { Client, Databases, ID, Query } from "appwrite";
import conf from "./conf";

class DatabaseService {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.API_ENDPOINT)
            .setProject(conf.PROJECT_ID);
        this.databases = new Databases(this.client);
    };

    // Function to send message.
    async sendMessage(name: string, email: string, message: string) {
        try {
            return await this.databases.createDocument(
                conf.DATABASE_ID,
                conf.COLLECTION_ID,
                ID.unique(),
                {
                    name,
                    email,
                    message,
                }
            )
        } catch (error) {
            throw error;
        }
    }

    // Function to check email.
    async checkEmail(email: string) {
        try {
            const similarEmail = await this.databases.listDocuments(
                conf.DATABASE_ID,
                conf.COLLECTION_ID,
                [Query.equal('email', email)]
            );

            return similarEmail.total > 0;
        } catch (error) {
            throw error;
        }
    }
};

const databaseService = new DatabaseService();

export default databaseService;
