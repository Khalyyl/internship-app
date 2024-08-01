import {connect, ConnectOptions} from "mongoose";

/* Database configuration
We use ! befor the process.env.MONGO_URI to tell the compiler that is always available
*/
export const dbConnect = () =>{
    connect(process.env.MONGO_URI!, {
       useNewUrlParser: true,
       useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log('MongoDB connected'),
        (error) => console.log(error)
    )
}