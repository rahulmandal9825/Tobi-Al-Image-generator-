import mongoose ,{Mongoose} from 'mongoose';

const MONGODB = process.env.MONGODB;

interface MongooseConnection{
    conn:Mongoose | null;
    promise: Promise<Mongoose> | null;

}

let cached: MongooseConnection = (global as any).mongoose

if(!cached) {
    cached =(global as any).mongoose = {
        conn: null , promise: null
    }
}

export const connectToDatabase =async () =>{
    if (cached.conn) return cached.conn 

    if(!MONGODB) throw new Error('MIssing MONGO');

    cached.promise =
    cached.promise || mongoose.connect(MONGODB , {
        dbName: 'Tobi', bufferCommands:false
    })
    cached.conn = await cached.promise;
    console.log("conected to database");
    
    
    return cached.conn;

}
