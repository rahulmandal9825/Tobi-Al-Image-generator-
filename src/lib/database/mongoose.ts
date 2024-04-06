import mongoose ,{Mongoose} from 'mongoose';

const MONGO = process.env.MONGO;

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

    if(!MONGO) throw new Error('MIssing MONGO');

    cached.promise =
    cached.promise || mongoose.connect(MONGO , {
        dbName: 'Tobi', bufferCommands:false
    })
    cached.conn = await cached.promise;
    
    return cached.conn;

}
